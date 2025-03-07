import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import { Server } from "socket.io";

import drawNumbers from "./utils/drawNumbers.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST"]
  }
}); 

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../dist/index.html"));
});

let countDown = 60;
let pastNumber = [9, 22, 3, 7, 2, 4];
let currentNumber = null;

io.on("connection", (socket) => {
  console.log(`User connected at ${socket.id}`);

  io.emit("updateTime", countDown);

  if (pastNumber) {
    io.emit("draw", pastNumber);
  }

  socket.on("setUsername", (username) => {
    socket.data.username = username;
  })
})

setInterval(() => {
  if (countDown > 0) {
    countDown--;
    io.emit("updateTime", countDown);
  } else {
    if (!currentNumber) {
      currentNumber = drawNumbers();
      pastNumber = currentNumber;
      currentNumber = null;
    }
    io.emit("draw", pastNumber);
    countDown = 60;
  }
}, 1000);

server.listen(process.env.PORT, () => {
  console.log(`This app is running on port: ${process.env.PORT}`);
});