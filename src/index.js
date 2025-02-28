import express from "express";
import path from "path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
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

app.use(express.static(path.join(__dirname, "../dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
});

let countDown = 3;
let interval;

io.on("connection", (socket) => {
  console.log(`User connected at ${socket.id}`);

  socket.emit("updateTime", countDown);

  if (!interval) {
    interval = setInterval(() => {
      if (countDown > 0) {
        countDown--;
        io.emit("updateTime", countDown);
      } else {
        clearInterval(interval);
        interval = null;
        io.emit("finish", "Times up");
      }
    }, 1000);
  }
})

server.listen(process.env.PORT, () => {
  console.log(`This app is running on port: ${process.env.PORT}`);
});
