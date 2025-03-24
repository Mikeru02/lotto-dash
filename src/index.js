import express from "express";
import "dotenv/config.js";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import { Server } from "socket.io";
import { io as Client } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

import drawNumbers from "./utils/drawNumbers.js";
import checkBets from "./utils/checkBets.js";
import getLastData from "./utils/getLastData.js";
import checkPlayers from "./utils/players.js";
import { createDraw, updateDraw } from "./utils/updateDatabase.js";
import payout from "./utils/winnerPayout.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  transports: ["websocket", "polling"]
}); 

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist/index.html"));
});

const portsLists = process.env.PORTS.split(",").map((url) => {
  const [host, port] = url.split(":");
  return { host, port };
})

const uniCount = 60; // Change this to adjust countdown
// const ports = process.env.PORTS.split(',') // Add ports for scaling
let isConnectedToPrimary = false;

let bets = {};
let currentPlayers = [];
const lastData = await getLastData(1);
const data = lastData.data;
let jackpot = Number(data.response.prizeMoney);
const jackpotIncrement = 10
let countDown = uniCount;
let pastNumber = data.response.winningNumber.split(",");
let currentNumber = null;
let drawId = null;

io.on("connection", (socket) => {
  if (pastNumber) {
    io.emit("draw", pastNumber);
    io.emit("jackpot", jackpot)
  }

  socket.on("bet", (numbers) => {
    bets[socket.data.username] = numbers;
    if (!currentPlayers.includes(socket.data.username)) {
      currentPlayers.push(socket.data.username);
      io.emit("currentPlayers", currentPlayers); // Emit only when a new player joins
  }
  })

  socket.on("setUsername", (token) => {
    const decoded = jwtDecode(token);
    socket.data.username = decoded.username;
  })

  socket.emit("currentPlayers", currentPlayers);

  socket.on("discovery", () => {
    if (process.env.PRIMARY_INSTANCE === 'true') {
      console.log(`http://${process.env.SERVER_NAME}:${process.env.PORT}`)
      socket.emit("address", `http://${process.env.SERVER_NAME}:${process.env.PORT}`);
    }
  })
})

if (process.env.PRIMARY_INSTANCE === "true") {
  (async () => {
    const lastdata = await getLastData(0)
    drawId = lastdata.data.response.drawId
  })();
  setInterval(async () => {
    const now = new Date();
    const seconds = now.getSeconds();

    const countdownTime = ((countDown - seconds) % 60).toString().padStart(2, "0");
    if (countdownTime === "59") {
      drawId = await createDraw(jackpot)
    }
    if (countdownTime === "00") {
      if (!currentNumber) {
        currentNumber = drawNumbers();
        pastNumber = currentNumber;
        currentNumber = null;
      }
      io.emit("draw", pastNumber);
      let addJackpot = checkBets(bets, pastNumber);
      if (!addJackpot) {
        jackpot += jackpotIncrement
        updateDraw(drawId, pastNumber.toString(), jackpot)
      } else {
        jackpot += jackpotIncrement;
        updateDraw(drawId, pastNumber.toString(), jackpot);
        io.emit("winners", addJackpot);
        await payout(addJackpot);
        jackpot = 100.00
      }
      io.emit("jackpot", jackpot);
      io.emit("reset", true);
      bets = {} // This resets the bets
      currentPlayers = [] // This resets the players
    }

    const nextDraw = new Date(now.getTime() + countdownTime * 1000);
    nextDraw.setSeconds(0);

    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(nextDraw);
    const format = `${formattedDate} in ${countdownTime} second/s`;
    io.emit("updateTime", format);
    checkPlayers(io, bets, currentPlayers);
    
  }, 1000);
} else {
  portsLists.forEach(({ host, port }) => {
    if (!isConnectedToPrimary) {
      const discoverSocket = Client(`http://${host}:${port}`, {
        transports: ["websocket", "polling"]
      });

      discoverSocket.on("connect", () => {
        discoverSocket.emit("discovery");
      });

      discoverSocket.on("address", (url) => {
        if (!isConnectedToPrimary) {
          isConnectedToPrimary = true;
          console.log(`INSTANCE localhost:${process.env.PORT} is connected to ${url}`)
          const primaryServer = Client(url, {
            transports: ["websocket", "polling"]
          });

          primaryServer.on("connect", () => {
            console.log("Connected to primary server!");
          });
          primaryServer.on("draw", (data) => io.emit("draw", data));
          primaryServer.on("jackpot", (data) => io.emit("jackpot", data));
          primaryServer.on("reset", (data) => io.emit("reset", data));
          primaryServer.on("winners", (data) => io.emit("winners", data));
          primaryServer.on("updateTime", (data) => io.emit("updateTime", data));
        }
      })  
    }
  })
}

server.listen(process.env.PORT, () => {
  console.log(`This app is running on port: ${process.env.PORT}`);
});


// This block is for emergency use only
// if (process.env.PRIMARY_INSTANCE === "true") {
//   setInterval(() => {
//     if (countDown > 0) {
//       countDown--;
//       io.emit("updateTime", countDown);
//     } else {
//       if (!currentNumber) {
//         currentNumber = drawNumbers();
//         pastNumber = currentNumber;
//         currentNumber = null;
//       }
//       io.emit("draw", pastNumber);
//       const strPastNumber = pastNumber.toString();
//       createDraw(strPastNumber, 50000)
//       countDown = uniCount;
//       }
//     }, 1000);
// }
