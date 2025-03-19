import axios from "axios";

export default async function getLastData(offset) {
  const response = await axios.get(`http://localhost:4000/v1/draw/lastdraw`, {
    headers: {
      "apikey": process.env.API_KEY,
      "Content-type": "application/json"
    },
    params : { offset: offset}
  });
  return response;
}