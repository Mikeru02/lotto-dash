// Start page

import Layout from "../layouts/default.js";
import Header from "../components/star/theader.js";
import Main from "../components/start/main.js";
import Footer from "../components/start/footer.js";
import Events from "../components/start/event.js";

export default function Start() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);

  // If may events ka sa start page kindly uncomment the next line 
  // Events();
}
