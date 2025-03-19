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
        numberSelection[selectedSlot].classList.remove("empty");
        numberSelection[selectedSlot].classList.add("selected");
        closeModal(); 
    } else {
        alert("Please enter a number between 1 and 45.");
    }
}

function resetSelection() {
    const numberSelection = document.querySelectorAll(".number-selection div");

    numberSelection.forEach(function (div) {
        div.textContent = ""; 
        div.classList.remove("selected"); 
        div.classList.add("empty"); 
    });

    document.getElementById("lottoNumber").value = ""; 
}

function generateWinningNumbers() {
    let numbers = new Set();

    while (numbers.size < 6) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    return [...numbers];
}

function getMinuteTimestamp() {
    const now = new Date();
    now.setSeconds(0, 0);
    return now.getTime();
}

function updateWinningNumbers() {
    const numberBoxes = document.querySelector('.last-winning-draw');
    numberBoxes.innerHTML = ''; 

    let storedData = JSON.parse(localStorage.getItem("winningNumbers")) || {};
    let currentMinute = getMinuteTimestamp();

    if (!storedData[currentMinute]) {
        storedData = { [currentMinute]: generateWinningNumbers() };
        localStorage.setItem("winningNumbers", JSON.stringify(storedData));
    }

    let winningNumbers = storedData[currentMinute];

    winningNumbers.forEach(num => {
        let div = document.createElement('div');
        div.classList.add('number-box');
        div.textContent = num.toString().padStart(2, '0');
        numberBoxes.appendChild(div);
    });
}

function updateCountdown() {
    const now = new Date();
    const seconds = now.getSeconds();

    const countdownTime = 60 - seconds;

    if (countdownTime === 60) {
        updateWinningNumbers();
    }

    const nextDraw = new Date(now.getTime() + countdownTime * 1000);
    nextDraw.setSeconds(0);

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(nextDraw);

    document.getElementById("countdown").innerText = 
        `${formattedDate} in ${countdownTime} second/s`;
}

updateWinningNumbers();
updateCountdown();

setInterval(updateCountdown, 1000);
