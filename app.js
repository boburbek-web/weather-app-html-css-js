"use strict";
const api = {
  key: "08be8eaa9d1479c50f83002c88eaad15",
  url: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector("#searchbox");

searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getQuery(searchBox.value);
  }
}

function getQuery(query) {
  fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}

function displayResult(weather) {
  console.log(weather);

  const region = document.querySelector(".region");
  region.innerHTML = `${weather.name}, ${weather.sys.country}`;

  const temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}°<span>C</span>`;

  const weat = document.querySelector(".weat");
  weat.innerHTML = `${weather.weather[0].main}`;

  const weatType = document.querySelector(".weat-type");
  weatType.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;


  const date = document.querySelector(".date");
  let dt = new Date();
  let x = dt.getDate();
  let y = dt.getFullYear();
  let z = dt.getMonth();

  const main = document.querySelector("main");
  `${weather.weather[0].main}`

  if (`${weather.weather[0].main}` == 'Clear') {
    main.style.backgroundImage = `url(./img/clear.jpg)`;
  }
  else if (`${weather.weather[0].main}` == 'Fog') {
    main.style.backgroundImage = `url(./img/fog.jpg)`;
  }
  else if (`${weather.weather[0].main}` == 'Clouds') {
    main.style.backgroundImage = `url(./img/cloud.jpg)`;
  }
  else if (`${weather.weather[0].main}` == 'Snow') {
    main.style.backgroundImage = `url(./img/rain.jpg)`;
  }
  else if (`${weather.weather[0].main}` == 'Rain') {
    main.style.backgroundImage = `url(./img/rain.jpg)`;
  }
   else {
    main.style.backgroundImage = `url(./logo.jpg)`;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date.innerHTML = ` ${x} , ${months[z]} , ${y}`;


}
