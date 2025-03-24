import axios from "axios";

export default async function updateBalance(balance) {
    try {
      const response = await axios.patch(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/account/balance`, {
        amount: balance
      }, {
        headers: {
          "apikey": "lotto_dash",
          "token": localStorage.getItem("token"),
          "Content-type": "application/json"
        }
      });
      console.log(response)
    } catch(err) {
      console.error(err);
      throw err;
    }
  }