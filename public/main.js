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

app.handleRouteChanges();
