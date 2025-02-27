import styles from "./component.module.css";

export default function Header(root){
  root.innerHTML = `
    <div>
      <h1>Lotto Dash</h1>
    </div>
    <div class="${styles['login-btns']}">
      <a>Login</a>
      <a>Sign Up</a>
    </div>
  `;

  root.className = styles['header']
}
