import Layout from "../layouts/default";

export default function PageNotFound() {
  const { header, main } = Layout(this.root);

  main.innerHTML = `
    <h1>Page Not Found</h1>
  `
}
