import Layout from "../layouts/default";

export default function pageNotFound() {
  const { navigation, main } = Layout(this.root);

  main.innerHTML = `
    <h1>Page Not Found</h1>
  `
}
