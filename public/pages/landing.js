import Layout from "../layouts/default";
import Header from "../components/home/header";
import Main from "../components/home/main";
import Footer from "../components/home/footer";

export default function Landing() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  Main(main);
  Footer(footer);
}
