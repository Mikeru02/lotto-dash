import SPA from "./core/spa";
import PageNotFound from "./pages/pageNotFound";
// TODO: Add pages here!
import Landing from "./pages/landing.js";
import Home from "./pages/home.js";

// Uncomment this to implement styling
//import "./styles/common.css";


import SPA from "./core/spa.js";
import PageNotFound from "./pages/pageNotFound.js";
import Home from "./pages/home.js";
import Landing from "./pages/landing.js";

const app = new SPA ({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
});

window.app = app;

// Add routes here!

app.handleRouteChanges();
