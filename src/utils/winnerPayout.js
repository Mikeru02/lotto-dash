import axios from "axios";

export default async function payout(winners) {
    for (const key in winners){
        const response = await axios.post("http://localhost:4000/v1/draw/winner", {
            username: winners[key]
        }, {
            headers: {
                "apikey": "lotto_dash",
                "Content-type": "application/json"
            }
        })
    }
}