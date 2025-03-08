// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";

export default function Events() {
  // Lagay mo her eyung events mo sa start page
  const playNowBtn = document.getElementById("play-btn");

  playNowBtn.addEventListener("click", function() {
    window.app.pushRoute("/landing")
  })
}
