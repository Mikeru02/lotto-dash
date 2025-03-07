import axios from "axios";
import { checkExpiration } from "../../utils/checkExpiration.js";

// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";

export default function Events() {
  // Lagay mo her eyung events mo sa landing page
  const socket = io("http://localhost:3000");
  const loginBtn = document.getElementById('login-button');

  if (localStorage.getItem('token')) {
    const isExpired = checkExpiration(localStorage.getItem('token'));
    if (isExpired) {
      window.alert("Seesion expired! Please Login again!");
      window.app.pushRoute("/landing");
    } else {
      window.app.pushRoute("/home")
    }
  } else {
    loginBtn.addEventListener("click", async function() {
      try {
        const response = await axios.post("http://localhost:4000/v1/account/login", {
          username: document.getElementById("username").value,
          password: document.getElementById("pass").value
        }, {
          headers: {
            "apikey": "lotto_dash",
            "Content-type": "application/json"
          }
        });

        localStorage.setItem("token", response.data.data.token);
        window.app.pushRoute("/home");
      } catch(err) {
        console.error("Login error:", err);
      }
    })
  }

  // Socket Part
  socket.on("updateTime", (time) => {
    document.getElementById("time-display").textContent = time;
  })

  socket.on("draw", (numbers) => {
    document.getElementById("drawn-numbers").textContent = numbers;
  })
}
