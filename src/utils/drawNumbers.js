export default function drawNumbers(){
  const min = 1;
  const max = 45

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
