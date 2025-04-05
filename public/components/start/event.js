// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";

import axios from "axios";

export default function Events() {
  // Lagay mo her eyung events mo sa start page
  window.addEventListener("load", async function () {
    fetch(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/`)
      .then(response => {
        if (!response.ok) {
          document.getElementById("server-down").style.display = "block";
          document.getElementById("app").style.display = "none";
        } else {
          // If server is up, show the app
          document.getElementById("server-down").style.display = "none";
          document.getElementById("app").style.display = "block";
        }
      })
      .catch(error => {
        document.getElementById("server-down").style.display = "block";
        document.getElementById("app").style.display = "none";
      });
  });
  const playNowBtn = document.getElementById("play-btn");

  playNowBtn.addEventListener("click", function() {
    window.app.pushRoute("/landing")
  })
}
