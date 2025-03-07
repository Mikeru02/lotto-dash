// Main to ng home page

import styles from "./component.module.css";

export default function Main(root) {
  root.innerHTML = `
    <!-- Lagay mo here lahat ng elements mo sa main -->
    <h1 id="time-display"><h1>
    <h1 id="drawn-numbers"><h1>
    <input id="chosen-number">
    <button>Bet</button>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
  // root.className = styles['main'];
}
