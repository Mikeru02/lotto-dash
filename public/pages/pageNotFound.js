// Page not found

import Layout from "../layouts/default.js";
import Header from "../components/pageNotFound/header.js";
import Main from "../components/pageNotFound/main.js";
import Footer from "../components/pageNotFound/footer.js";
import Events from "../components/pageNotFound/event.js";

export default function PageNotFound() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);

  // If may events ka sa page not found kindly uncomment the next line 
  // Events();
}

