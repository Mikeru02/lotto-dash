export default function checkBets(allBets, winningNumbers) {
    return allBets.some(bet => {
        winningNumbers.every(num => bet.includes(num))
    })
}