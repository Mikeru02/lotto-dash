import axios from "axios";

export async function getProfile() {
    try {
    const response = await axios.get("http://localhost:4000/v1/account", {
        headers: {
            "apikey": "lotto_dash",
            "Content-type": "application/json",
            "token": localStorage.getItem("token")
        }
    });
    return response.data;
    } catch(err) {
        console.error(err);
        throw err;
    }
}

export async function bet(betNumbers) {
    try {
        const response = await axios.post("http://localhost:4000/v1/account/bet", {
            betNumbers: betNumbers
        }, {
            headers: {
                "apikey": "lotto_dash",
                "token": localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        })
        console.log(response)
    } catch(err) {
        console.error(err);
        throw err;
    }
}