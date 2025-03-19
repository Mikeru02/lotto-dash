import axios from "axios";

export default async function updateBalance(balance) {
    try {
      const response = await axios.patch("http://localhost:4000/v1/account/balance", {
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