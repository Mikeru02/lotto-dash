import axios from "axios";
import { checkExpiration } from "../../utils/checkExpiration.js";

// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";


export default function Events() {
  // Lagay mo her eyung events mo sa landing page
  const drawContainer = document.getElementById("draw-container");
  const drawChildren = drawContainer.children;
  const socket = io("http://localhost:3000");
  // TODO: I'll fix this later
  const loginBtn = document.getElementById('login-btn');

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
          username: document.getElementById("email-login").value,
          password: document.getElementById("pass-login").value
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
    document.getElementById("countdown").textContent = time;
  })

  // TODO: I'll fix this later
  socket.on("draw", (numbers) => {
    console.log(numbers)
    for (let i = 0; i < 6; i++) {
      drawChildren[i].textContent = numbers[i];
    }
  })

  // Panel switch elements
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  // Switch between sign-up and sign-in forms
  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  // Modal elements
  const modal = document.getElementById("authModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  if (openModalBtn && modal) {
    // Open modal
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Close modal when clicking the close button
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    // Close modal if user clicks outside the modal box
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

