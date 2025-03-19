import axios from "axios";

export default async function deposit(amount) {
    try {
        const response = await axios.post("http://localhost:4000/v1/account/deposit", {
            amount: amount
        }, {
            headers: {
                "apikey": "lotto_dash",
                "token": localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        });
        return response
    } catch(err) {
        console.error(err);
        throw err;
    }
}