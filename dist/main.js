import SPA from "./core/spa.js";
// TODO: Add pages here!


import "./styles/common.css";

const app = new SPA({
  root: document.getElementById("app"),
  defaultRoute: pageNotFound
})

window.app = app;

app.add("/");
