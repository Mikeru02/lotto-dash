<<<<<<< HEAD
export default function Layout(root) {
    root.innerHTML = `
        <header id="header"></header>
        <main id="main"></main>
        <footer id="footer"></footer>
    `
  
    return {
      header: document.getElementById('header'),
      main: document.getElementById('main'),
      footer: document.getElementById('footer')
    }
  }
=======
export default function Layout(root){
  root.innerHTML = `
    <header id="header"></header>
    <main id="main"></main>
    <footer id="footer"></footer>
  `
  return {
    header: document.getElementById("header"),
    main: document.getElementById("main"),
    footer: document.getElementById("footer")
  }
}
>>>>>>> 9e7a71cdb21d5995713f18cd21b666f996947892
