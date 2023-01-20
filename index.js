const newHr = 00;
const newMin = 0;
const newSec = 5;

document.querySelector(".hours").innerHTML = newHr;
document.querySelector(".minutes").innerHTML = newMin;
document.querySelector(".seconds").innerHTML = newSec;

let myInterval;
let now;
let today;
let deadline;

function startTimer() {
  const t = deadline - now;
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(myInterval);
  }
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  now = new Date();
}

function createTimer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentHour = today.getHours();
  const currentMin = today.getMinutes();
  const currentSec = today.getSeconds();
  deadline = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour + newHr,
    currentMin + newMin,
    currentSec + newSec
  );
  now = new Date();
  myInterval = setInterval(startTimer, 1000);
}
