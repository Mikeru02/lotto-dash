// If need mo ng styles here kindly uncomment this 
import styles from "./component.module.css";
import getBalance from "../../utils/getBalance";
import updateBalance from "../../utils/updateBalance";
import { bet } from "../../utils/process";

export default async function Events() {
  window.addEventListener("load", async function () {
    fetch(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/`)
      .then(response => {
        if (!response.ok) {
          document.getElementById("server-down").style.display = "block";
          document.getElementById("app").style.display = "none";
        } else {
          // If server is up, show the app
          document.getElementById("server-down").style.display = "none";
          document.getElementById("app").style.display = "block";
        }
      })
      .catch(error => {
        document.getElementById("server-down").style.display = "block";
        document.getElementById("app").style.display = "none";
      });
  });
  
  const socket = io();
  let walletBalance = await getBalance();
  const balanceContainer = document.getElementById("balance");
  const drawContainer = document.getElementById("draw-container");
  const profileBtn = document.getElementById("profile-btn");
  const drawChildren = drawContainer.children;
  const cancelBtn = document.getElementById("cancel");
  const saveBtn = document.getElementById("save");
  const resetSelectionBtn = document.getElementById("reset-selection");
  const submitSelectionBtn = document.getElementById("submit-selection");
  const playerContainer = document.getElementById("players-container");
  const numberBtn = document.getElementById("number-btn");
  const winnersContainer = document.getElementById("winners")
  let bets = [];

  balanceContainer.innerHTML = walletBalance;
  generateBtn(numberBtn);

  document.querySelectorAll(".numbers-btn").forEach((div) => {
    div.addEventListener("click", () => {
      const input = document.getElementById("lottoNumber");
      input.value = div.getAttribute("data-val");
    }) 
  })

  profileBtn.addEventListener("click", function() {
    window.app.pushRoute("/profile");
  });
  
  cancelBtn.addEventListener("click", function() {
    closeModal();
  });

  saveBtn.addEventListener("click", function() {
    saveNumber();
  });
  
  resetSelectionBtn.addEventListener("click", function() {
    resetSelection();
  });

  submitSelectionBtn.addEventListener("click", async function() {
    const balance = await getBalance();
    const numberSelection = document.querySelectorAll(".number-selection div");
    const selectedNumbers = [];
    
    numberSelection.forEach(div => {
        if (div.textContent.trim() !== "") {
            selectedNumbers.push(div.textContent.trim());
        }
    });

    if (selectedNumbers.length < 6) {
        window.alert("Please complete your 6-number combination before submitting!");
        return;
    } else if (balance < 20) {
        window.alert("Please cash in first before betting!");
    } else {
        document.querySelectorAll(".input-num").forEach((div) => {
            bets.push(div.innerHTML);
        });

        socket.emit("bet", bets);
        submitSelectionBtn.setAttribute("disabled", "true");
        resetSelectionBtn.setAttribute("disabled", "true");

        document.querySelectorAll(".input-num").forEach((div) => {
            div.style.pointerEvents = "none"; 
            div.style.opacity = "0.5"; 
        });
        
        const updatedBalance = parseInt(balance) - 20;
        await updateBalance(updatedBalance);
        let updatedbalance = await getBalance();
        balanceContainer.innerHTML = updatedbalance;
        await bet(bets.toString());
    }
  });

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
    document.getElementById("jackpot").textContent = `₱ ${jackpot}.00`;
  })

  socket.on("reset", async (arg) => {
    resetSelection();
    playerContainer.innerHTML = "";
    bets = [];
    let updatedbalance = await getBalance();
    balanceContainer.innerHTML = updatedbalance;

    document.querySelectorAll(".input-num").forEach((div) => {
        div.style.pointerEvents = "auto"; 
        div.style.opacity = "1";
    });

    resetSelectionBtn.removeAttribute("disabled");
    submitSelectionBtn.removeAttribute("disabled");
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
  });

  socket.on("winners", (winners) => {
    winnersContainer.innerHTML = "";
    if (winners < 0) {
      const div = document.createElement("div");
      div.innerHTML = 'No Winners';
      winnersContainer.appendChild(div);
    }
    for (const key in winners) {
      const div = document.createElement("div");
      div.innerHTML = winners[key];
      winnersContainer.appendChild(div);
    }
  })
}

let selectedSlot = null;

function generateBtn(numberBtn) {
  for (let i = 0; i < 45; i++) {
    const numberDiv = document.createElement("button");
    numberDiv.innerHTML = i + 1;
    numberDiv.classList.add("numbers-btn", `${styles['numbers-btn']}`);
    numberDiv.setAttribute("data-val", i+1);
    numberBtn.appendChild(numberDiv)
  }
}

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
