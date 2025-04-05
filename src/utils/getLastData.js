import axios from "axios";

export default async function getLastData(offset) {
  try {
  const response = await axios.get(`http://${process.env.API_HOST}:${process.env.API_PORT}/v1/draw/lastdraw`, {
    headers: {
      "apikey": process.env.API_KEY,
      "Content-type": "application/json"
    },
    params : { offset: offset}
  });
  return response;
} catch (err) {
  console.error(err);
  return { data: { response: { prizeMoney: "0", winningNumber: "0", drawId: "1" } } };
}
}