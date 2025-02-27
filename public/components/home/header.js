import "./component.css";

export default function Header(root){
  root.innerHTML = `
    <div>
      <h1>Lotto Dash</h1>
    </div>
    <div class="login-btns">
      <a>Login</a>
      <a>Sign Up</a>
    </div>
  `
}
