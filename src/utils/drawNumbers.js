export default function drawNumbers(){
  const min = 1;
  const max = 45;
  const numOfDrawnNumbers = 6;
  const drawnNumbers = [];
  
  for (let i = 0; i < numOfDrawnNumbers; i++) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    drawnNumbers[i] = randomNumber;
  }

  return drawnNumbers;
}
