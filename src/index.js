import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import { Server } from "socket.io";
import { jwtDecode } from "jwt-decode";

import drawNumbers from "./utils/drawNumbers.js";
import checkBets from "./utils/checkBets.js";
import getLastData from "./utils/getLastData.js";
import checkPlayers from "./utils/players.js";
import { createDraw } from "./utils/updateDatabase.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST"]
  }
}); 

//const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../dist/index.html"));
});

const uniCount = 60; // Change this to adjust countdown

let bets = {};
let currentPlayers = [];
const lastData = await getLastData();
const data = lastData.data;
let jackpot = Number(data.response.prizeMoney);
const jackpotIncrement = 10
let countDown = uniCount;
let pastNumber = data.response.winningNumber.split(",");
let currentNumber = null;

io.on("connection", (socket) => {
  console.log(`User connected at ${socket.id}`)
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

  
})

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

if (process.env.PRIMARY_INSTANCE === "true") {
  setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();

    const countdownTime = (countDown - seconds).toString().padStart(2, "0");

    if (countdownTime === "60") {
      if (!currentNumber) {
        currentNumber = drawNumbers();
        pastNumber = currentNumber;
        currentNumber = null;
      }
      io.emit("draw", pastNumber);
      let addJackpot = checkBets(bets, pastNumber);
      if (!addJackpot) {
        jackpot += jackpotIncrement
        createDraw(pastNumber.toString(), jackpot)
      } else {
        jackpot += jackpotIncrement
        createDraw(pastNumber.toString(), jackpot)
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
}

server.listen(process.env.PORT, () => {
  console.log(`This app is running on port: ${process.env.PORT}`);
});
