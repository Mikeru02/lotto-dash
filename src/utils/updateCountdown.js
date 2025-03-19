// Made by @RodienJillian on static/js/home.js line 85

export default function updateCountdown() {
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
    return `${formattedDate} in ${countdownTime} second/s`;
}