import SPA from "./core/spa";
import PageNotFound from "./pages/pageNotFound";

const app = new SPA ({
  root: document.getElementById("app"),
  defaultRoute: PageNotFound
})

window.app = app;

app.add("/")

app.handleRouteChanges();
