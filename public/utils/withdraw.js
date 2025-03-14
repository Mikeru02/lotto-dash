import axios from "axios";

export default async function withdraw(amount) {
    try {
        const response = await axios.post("http://localhost:4000/v1/account/withdraw", {
            amount: amount
        }, {
            headers: {
                "apikey": "lotto_dash",
                "token": localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        })
        return response;

    } catch(err) {
        console.error(err);
        throw err;
    }
}