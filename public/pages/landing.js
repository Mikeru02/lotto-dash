// Landing Page to without login of the user

import Layout from "../layouts/default.js";
import Header from "../components/landing/header.js";
import Main from "../components/landing/main.js";
import Footer from "../components/landing/footer.js";
import Events from "../components/landing/event.js";

export default function Landing() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);

  // If may events ka sa landing page kindly uncomment the next line 
  // Events();
}
