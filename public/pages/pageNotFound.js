import Layout from "../layouts/default.js";

export default function PageNotFound() {
  const { header, main, footer } = Layout(this.root);

  header.innerHTML = `
    <h1>Header Section</h1>
  `;

  main.innerHTML = `
    <h1>Page Not Found</h1>
  `;
}
