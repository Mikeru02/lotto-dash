import axios from "axios";

export default async function getBalance() {
    try {
      const response = await axios.get("http://localhost:4000/v1/account/balance", {
        headers: {
          "apikey": "lotto_dash",
          "token": localStorage.getItem("token"),
          "Content-type": "application/json"
        }
      });
      return response.data.data.walletBalance;
    } catch(err) {
      console.error(err);
      throw err;
    }
  }