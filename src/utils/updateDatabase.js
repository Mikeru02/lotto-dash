import axios from "axios";

export async function createDraw(winningNumber, prizeMoney) {
  try {
    const response = await axios.post("http://localhost:4000/v1/draw", {
      winningNumber: winningNumber,
      prizeMoney: prizeMoney
    }, {
      headers: {
        "apikey": "lotto_dash",
        "Content-type": "application/json" 
      }
    })
  } catch(err) {
    console.error("Creating draw error:", err);
  }
}