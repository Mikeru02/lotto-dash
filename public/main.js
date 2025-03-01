import SPA from "./core/spa.js";
import PageNotFound from "./pages/pageNotFound.js";
import Home from "./pages/home.js";

import "./styles/common.css";

const app = new SPA ({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
})

window.app = app;

app.add("/", Home);
app.add("/landing",)

app.handleRouteChanges();
 
// Socket
const socket = io("http://localhost:3000");
/*
socket.on("updateTime", (time) => {
  document.getElementById("time-display").textContent = time;
})

socket.on("finish", (msg) => {
  document.getElementById("time-display").textContent = msg;
})

socket.on("draw", (numbers) => {
  console.log(numbers)
  document.getElementById("drawn-numbers").textContent = numbers;
})
*/
