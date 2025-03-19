export default function checkBets(allBets, winningNumbers) {
  let winners = []
  for (let key in allBets) {
    if (JSON.stringify(allBets[key]) === JSON.stringify(winningNumbers)){
      winners.push(key);
    } 
  }
  return winners.length > 0 ? winners : false; 
}