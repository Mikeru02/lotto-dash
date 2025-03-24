import axios from "axios";

export default async function payout(winners) {
    for (const key in winners){
        const response = await axios.post(`http://${process.env.API_HOST}:${process.env.API_PORT}/v1/draw/winner`, {
            username: winners[key]
        }, {
            headers: {
                "apikey": process.env.API_KEY,
                "Content-type": "application/json"
            }
        })
    }
}