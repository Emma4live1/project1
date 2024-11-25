

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 30) + (minutes * 0.5); // 30 degrees per hour, 0.5 degrees per minute
    const minuteAngle = (minutes * 6) + (seconds * 0.1); // 6 degrees per minute, 0.1 degrees per second
    const secondAngle = seconds * 6; // 6 degrees per second

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

updateClock();
setInterval(updateClock, 1000); // Update clock every second

