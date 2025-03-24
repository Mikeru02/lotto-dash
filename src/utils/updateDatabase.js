import axios from "axios";

export async function createDraw(prizeMoney) {
  try {
    const response = await axios.post(`http://${process.env.API_HOST}:${process.env.API_PORT}/v1/draw`, {
      winningNumber: null,
      prizeMoney: prizeMoney
    }, {
      headers: {
        "apikey": process.env.API_KEY,
        "Content-type": "application/json" 
      }
    });
    return response.data.data.drawId;
  } catch(err) {
    console.error("Creating draw error:", err);
  }
}

export async function updateDraw(drawId, winningNumber, prizeMoney) {
  try {
    const response = await axios.patch(`http://${process.env.API_HOST}:${process.env.API_PORT}/v1/draw`, {
      drawId: drawId,
      winningNumber: winningNumber,
      prizeMoney: prizeMoney
    }, {
      headers: {
        "apikey": process.env.API_KEY,
        "Content-type": "application/json" 
      }
    })
  } catch(err) {
    console.error("Creating draw error:", err);
  }
}