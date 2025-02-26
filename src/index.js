import SPA from "./core/spa";
import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import { Server } from "socket.io";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/home";

const app = new SPA({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
});
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST"]
  }
});

// const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/", Home);

app.handleRouteChanges();

io.on("connection", (socket) => {
  console.log(`User connected at ${socket.id}`);

  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  })
})

server.listen(process.env.PORT, () => {
  console.log(`This app is running on port: ${process.env.PORT}`);
});
