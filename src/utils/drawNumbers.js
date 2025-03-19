export default function drawNumbers(){
    const min = 1;
    const max = 45;
    const numOfDrawnNumbers = 6;
    const drawnNumbers = [];
    
    // TODO: Uncomment this after checking for winner
    while (drawnNumbers.length < numOfDrawnNumbers) {
      const randomNumber = Math.floor(Math.random() * max) + min;
      const str_random = randomNumber.toString();
      if (randomNumber < 10) {
        const str_num = '0' + str_random;
        if (drawnNumbers.includes(str_num)) {
          continue
        } else {
          drawnNumbers.push(str_num)
        }
      } else {
        if (drawnNumbers.includes(str_random)) {
          continue
        } else {
          drawnNumbers.push(str_random)
        }
      }
    }
  
    return drawnNumbers;

    //return ['1', '2', '3', '4', '5', '6'];
  }