import Layout from "../layouts/default.js";
import Header from "../components/home/header.js";

export default function Home() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
}
