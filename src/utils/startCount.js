import drawNumbers from "./drawNumbers.js";

export default function startCount(io, interval, drawNumber, countDown) {
  if (!interval) {
    interval = setInterval(() => {
      if (countDown > 0) {
        countDown--;
        io.emit("updateTime", countDown);
        
      } else {
        clearInterval(interval);
        interval = null;
        countDown = 60;

        if (!drawNumber) {
          drawNumber = drawNumbers();
        }
        io.emit("draw", drawNumber);
      }
      
    }, 1000);
  }
}
