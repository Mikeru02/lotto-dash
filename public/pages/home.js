// Landing Page to without login of the user

import Layout from "../layouts/default.js";
import Header from "../components/home/header.js";
import Main from "../components/home/main.js";
import Footer from "../components/home/footer.js";
import Events from "../components/home/event.js";

export default function Home() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);

  // If may events ka sa home page kindly uncomment the next line 
  Events();
}
