// Header to ng home page

import styles from "./component.module.css";

export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
    <h1> Home page </h1>
  `;
  
  // If need mo ng css sa mismong header, uncomment mo yung next line 
  // root.className = styles['header'];
}

