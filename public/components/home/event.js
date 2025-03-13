// If need mo ng styles here kindly uncomment this 
import styles from "./component.module.css";

export default function Events() {
  const socket = io("http://localhost:3000");
  const drawContainer = document.getElementById("draw-container");
  const drawChildren = drawContainer.children;
  const cancelBtn = document.getElementById("cancel");
  const saveBtn = document.getElementById("save");
  const resetSelectionBtn = document.getElementById("reset-selection");
  const submitSelectionBtn = document.getElementById("submit-selection");
  const playerContainer = document.getElementById("players-container");
  const bets = [];

  cancelBtn.addEventListener("click", function() {
    closeModal();
  });

  saveBtn.addEventListener("click", function() {
    saveNumber();
  });
  
  resetSelectionBtn.addEventListener("click", function() {
    resetSelection();
  });

  submitSelectionBtn.addEventListener("click", function() {
    document.querySelectorAll(".input-num").forEach((div) => {
      bets.push(div.innerHTML);
    })
    socket.emit("bet", bets);
    submitSelectionBtn.disable = true;
  })

  document.querySelectorAll(".input-num").forEach((div) => {
    div.addEventListener("click", function() {
      const index = this.getAttribute("data-index");
      openModal(index);
    });
  });

  document.getElementById("close-btn").addEventListener('click', function() {
    closeModal();
  })

  // Socket Part

  socket.emit("setUsername", localStorage.getItem("token"));

  socket.on("updateTime", (time) => {
    document.getElementById("countdown").textContent = time;
  })

  socket.on("draw", (numbers) => {
    for (let i = 0; i < 6; i++) {
      drawChildren[i].textContent = numbers[i];
    }
  })
  socket.on("jackpot", (jackpot) => {
    document.getElementById("jackpot").textContent = `\u20B1 ${jackpot}.00`;
  })

  socket.on("reset", (arg) => {
    resetSelection(); 
  });
  
  socket.on("addPlayer", (player) => {
    const div = document.createElement("div");
    div.innerHTML = player;
    playerContainer.appendChild(div)
  });

  socket.on("currentPlayers", (players) => {
    const div = document.createElement("div");
    
    for (const player in players) {
      div.innerHTML = players[player];
      playerContainer.appendChild(div);
    }
  })
}

let selectedSlot = null;

function openModal(index) {
    selectedSlot = index;
    document.getElementById("numberModal").style.display = "flex"; 
}

function closeModal() {
    document.getElementById("numberModal").style.display = "none";
    document.getElementById("lottoNumber").value = ""; 
}

function saveNumber() {
    const input = document.getElementById("lottoNumber").value;
    const numberSelection = document.querySelectorAll(".number-selection div");

    let existingNumbers = Array.from(numberSelection).map(div => div.textContent.trim()).filter(num => num !== "");

    if (input >= 1 && input <= 45) {
        if (existingNumbers.includes(input.toString())) {
            alert("This number is already selected. Please choose a different number.");
            return;
        }

        numberSelection[selectedSlot].textContent = input;
        numberSelection[selectedSlot].classList.remove(`${styles['empty']}`);
        numberSelection[selectedSlot].classList.add(`${styles['selected']}`);
        closeModal(); 
    } else {
        alert("Please enter a number between 1 and 45.");
    }
}

function resetSelection() {
    const numberSelection = document.querySelectorAll(".number-selection div");

    numberSelection.forEach(function (div) {
        div.textContent = ""; 
        div.classList.remove(`${styles['selected']}`); 
        div.classList.add(`${styles['empty']}`); 
    });

    document.getElementById("lottoNumber").value = ""; 
}

// function generateWinningNumbers() {
//     let numbers = new Set();

//     while (numbers.size < 6) {
//         let randomNumber = Math.floor(Math.random() * 45) + 1;
//         numbers.add(randomNumber);
//     }

//     return [...numbers];
// }

// function getMinuteTimestamp() {
//     const now = new Date();
//     now.setSeconds(0, 0);
//     return now.getTime();
// }

// function updateWinningNumbers() {
//     const numberBoxes = document.querySelector('.last-winning-draw');
//     numberBoxes.innerHTML = ''; 

//     let storedData = JSON.parse(localStorage.getItem("winningNumbers")) || {};
//     let currentMinute = getMinuteTimestamp();

//     if (!storedData[currentMinute]) {
//         storedData = { [currentMinute]: generateWinningNumbers() };
//         localStorage.setItem("winningNumbers", JSON.stringify(storedData));
//     }

//     let winningNumbers = storedData[currentMinute];

//     winningNumbers.forEach(num => {
//         let div = document.createElement('div');
//         div.classList.add('number-box');
//         div.textContent = num.toString().padStart(2, '0');
//         numberBoxes.appendChild(div);
//     });
// }

// function updateCountdown() {
//     const now = new Date();
//     const seconds = now.getSeconds();

//     const countdownTime = 60 - seconds;

//     if (countdownTime === 60) {
//         updateWinningNumbers();
//     }

//     const nextDraw = new Date(now.getTime() + countdownTime * 1000);
//     nextDraw.setSeconds(0);

//     const options = { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric', 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         hour12: true 
//     };
//     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(nextDraw);

//     document.getElementById("countdown").innerText = 
//         `${formattedDate} in ${countdownTime} second/s`;
// }

// updateWinningNumbers();
// updateCountdown();

// setInterval(updateCountdown, 1000);
