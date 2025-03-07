// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";

export default function Events() {
  // Lagay mo her eyung events mo sa home page

  // Socket Part
  const socket = io("http://localhost:3000");

  socket.on("updateTime", (time) => {
    document.getElementById("time-display").textContent = time;
  })

  socket.on("draw", (numbers) => {
    document.getElementById("drawn-numbers").textContent = numbers;
  })
}
