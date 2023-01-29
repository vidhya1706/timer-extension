let myInterval;
let now;
let deadline;
let initialTime = {
  hour: 0,
  min: 0,
  sec: 0,
};
let changingTime = {
  hour: 0,
  min: 0,
  sec: 0,
};
const elem = document.getElementsByClassName("action")?.[0];
//
const hrSelectElement = document.getElementById("hour_select_id");
let text1 = "<option value='00'>00</option>";
for (let i = 1; i < 24; i++) {
  const value = i < 10 ? `0${i}` : i.toString();
  text1 += `<option value="${value}">${value}</option>`;
}
hrSelectElement.innerHTML = text1;
//
const minSelectElement = document.getElementById("min_select_id");
let text2 = "<option value='00'>00</option>";
for (let i = 1; i < 60; i++) {
  const value = i < 10 ? `0${i}` : i.toString();
  text2 += `<option value="${value}">${value}</option>`;
}
minSelectElement.innerHTML = text2;
//
const secSelectElement = document.getElementById("sec_select_id");
let text3 = "<option value='00'>00</option>";
for (let i = 1; i < 61; i++) {
  const value = i < 10 ? `0${i}` : i.toString();
  text3 += `<option value="${value}">${value}</option>`;
}
secSelectElement.innerHTML = text3;

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
  changingTime.hour = Math.floor(
    (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  changingTime.min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  changingTime.sec = Math.floor((t % (1000 * 60)) / 1000);

  if (
    changingTime.hour === 0 &&
    changingTime.min === 0 &&
    changingTime.sec === 0
  ) {
    onClearInterval();
  } else {
    now = new Date();
  }
  setTime(changingTime.hour, changingTime.min, changingTime.sec);
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
    currentHour + changingTime.hour,
    currentMin + changingTime.min,
    currentSec + changingTime.sec
  );
  now = new Date();
  myInterval = setInterval(startTimer, 1000);
}

function onClickAction() {
  if (elem.classList.contains("play")) {
    if (
      Number(initialTime.hour) > 0 &&
      Number(initialTime.min) > 0 &&
      Number(initialTime.sec)
    ) {
      createTimer();
    }
  } else {
    onClearInterval();
  }
}

const element = document.getElementById("action-btn");
if (element) {
  element.addEventListener("click", onClickAction);
}

setTime(changingTime.hour, changingTime.min, changingTime.sec);

$(document).ready(function () {
  $("#hour_select_id").on("click", function (e) {
    const value = Number(e.target.value);
    initialTime.hour = value;
    changingTime.hour = value;
    document.querySelector(".hours").innerHTML =
      value.toString().length > 1 ? h : `0${value}`;
  });
  $("#min_select_id").on("click", function (e) {
    const value = Number(e.target.value);
    initialTime.min = value;
    changingTime.min = value;
    document.querySelector(".minutes").innerHTML =
      value.toString().length > 1 ? m : `0${value}`;
  });
  $("#sec_select_id").on("click", function (e) {
    const value = Number(e.target.value);
    initialTime.sec = value;
    changingTime.sec = value;
    document.querySelector(".seconds").innerHTML =
      value.toString().length > 1 ? s : `0${value}`;
  });
});
