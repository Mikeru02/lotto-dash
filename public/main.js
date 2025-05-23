import SPA from "./core/spa.js";
import PageNotFound from "./pages/pageNotFound.js";
import Landing from "./pages/landing.js";
import Home from "./pages/home.js";
import Profile from "./pages/profile.js";
import Start from "./pages/start.js";

// Uncomment this to implement styling
import "./styles/common.css";

const app = new SPA ({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
});

window.app = app;

// Add routes here!
app.add("/", Start);
app.add("/landing", Landing);
app.add("/home", Home); // TODO: Add true to the parameters after developing to incorporate user authentication
app.add("/profile", Profile) // TODO: Add true to the parameters after developing to incorporate user authentication

app.handleRouteChanges();
