import SPA from "./core/spa";
import PageNotFound from "./pages/pageNotFound";
// TODO: Add pages here!


// Uncomment this to implement styling
//import "./styles/common.css";

const app = new SPA({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
})

window.app = app;

// Add routes here!
app.get("/", (req, res) => {
  res.send("<h1>HEllo</h1>");
});

app.handleRouteChanges();
