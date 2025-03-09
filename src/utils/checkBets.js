export default function checkBets(allBets, winningNumbers) {
  for (let key in allBets) {
    if (JSON.stringify(allBets[key]) === JSON.stringify(winningNumbers)){
      return true;
    } else {
      return false;
    }
  }
}