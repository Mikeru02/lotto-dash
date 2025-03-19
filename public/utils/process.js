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
    } catch(err) {
        console.error(err);
        throw err;
    }
}

export async function getBet() {
    try {
        const response = await axios.get("http://localhost:4000/v1/account/bet", {
            headers: {
                "apikey": "lotto_dash",
                "token": localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        });
        return response.data.data;
    } catch(err) {
        console.error(err);
        throw err;
    }
}

export async function getDraw(drawId) {
    try {
        const response = await axios.get(`http://localhost:4000/v1/draw?drawId=${drawId}`, {
            headers: {
                "apikey": "lotto_dash",
                "token": localStorage.getItem("token"),
                "Content-type": "application/json"
            },
        });
        return response.data.response;
    } catch(err) {
        console.error(err);
        throw err;
    }
}