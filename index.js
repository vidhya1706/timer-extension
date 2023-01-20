const newHr = 0;
const newMin = 0;
const newSec = 5;

setTime(newHr, newMin, newSec);

let myInterval;
let now;
let today;
let deadline;

const elem = document.getElementsByClassName("action")?.[0];

function setTime(h, m, s) {
  document.querySelector(".hours").innerHTML =
    h.toString().length > 1 ? h : `0${h}`;
  document.querySelector(".minutes").innerHTML =
    m.toString().length > 1 ? m : `0${m}`;
  document.querySelector(".seconds").innerHTML =
    s.toString().length > 1 ? s : `0${s}`;
}

function onClearInterval() {
  clearInterval(myInterval);
  elem.classList.remove("pause");
  elem.classList.add("play");
}

function startTimer() {
  const t = deadline - now;
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (hours === 0 && minutes === 0 && seconds === 0) {
    onClearInterval();
  }
  setTime(hours, minutes, seconds);
  now = new Date();
}

function createTimer() {
  elem.classList.remove("play");
  elem.classList.add("pause");
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

function onClickAction() {
  if (elem.classList.contains("play")) {
    createTimer();
  } else {
    onClearInterval();
  }
}
