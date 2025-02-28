function updateCountdown() {
    const now = new Date();
    const seconds = now.getSeconds();

    const countdownTime = 60 - seconds;

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

updateCountdown();

setInterval(updateCountdown, 1000);
