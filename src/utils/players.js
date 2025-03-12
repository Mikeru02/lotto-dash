export default function checkPlayers(io, dict, currentPlayers) {

    for (const key in dict) {
        if (!currentPlayers.includes(key)) {
            currentPlayers.push(key);
            io.emit("addPlayer", key);
        } else {
            continue
        }
    }
}