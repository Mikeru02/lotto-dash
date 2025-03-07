// Header to ng landing page

import styles from "./component.module.css";

export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
    <h1> Landing page </h1>
    <input id="username">
    <input id="pass">
    <button id="login-button"> Log In </button>
  `;
  
  // If need mo ng css sa mismong header, uncomment mo yung next line 
  // root.className = styles['header'];
}
