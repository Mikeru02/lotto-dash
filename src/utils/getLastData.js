import axios from "axios";

export default async function getLastData() {
  const response = await axios.get("http://localhost:4000/v1/draw/lastdraw", {
    headers: {
      "apikey": "lotto_dash",
      "Content-type": "application/json"
    }
  });
  return response;
}