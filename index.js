let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

function currentTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  let currentMinutes = now.getMinutes();

  let currentTime = `Today is ${currentDay}, ${currentHour}:${currentMinutes}`;
  return currentTime;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = searchInput.value;
}

function convert(event) {
  let convert = document.querySelector("#convert-temp");
  convert.innerHTML = ` ${(Math.round(17) * 9) / 5 + 32}°F`;
}

function reConvert(event) {
  let reConvert = document.querySelector("#convert-temp");
  reConvert.innerHTML = "17°C";
}

let header = document.querySelector("#currentTime");
header.innerHTML = currentTime();

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", search);

let convertTemp = document.querySelector("#farenheit");
convertTemp.addEventListener("click", convert);

let reConvertTemp = document.querySelector("#celsius");
reConvertTemp.addEventListener("click", reConvert);
