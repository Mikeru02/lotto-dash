import Layout from "../layouts/default.js";

export default function Home() {
  const { header, main, footer } = Layout(this.root);

  main.innerHTML = `
    <h1>Home Page to</h1>
  `
}
