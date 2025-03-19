// Profile page ni user

import Layout from "../layouts/default.js";
import Header from "../components/profile/header.js";
import Main from "../components/profile/main.js";
import Footer from "../components/profile/footer.js";
import Events from "../components/profile/event.js";

export default function Profile() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);

  // If may events ka sa profile page kindly uncomment the next line 
  Events();
}
