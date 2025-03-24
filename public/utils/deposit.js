import axios from "axios";

export default async function deposit(amount) {
    try {
        const response = await axios.post(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/account/deposit`, {
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