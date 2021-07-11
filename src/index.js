//Hour display

function showTime() {
  let now = new Date();

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = week[now.getDay()];
  let hour = `${now.getHours()}:${now.getMinutes()} hrs.`;

  /*if (now.getMinutes() < 10) {now.getMinutes() = `0${now.getMinutes()}`;}*/

  let display = document.querySelector("#current-date");
  display.innerHTML = day + hour;
}

showTime();

/*When a user searches for a city, it should display the name of the city
on the result page and the current temperature of the city.*/

//HURGAR EL OBJETO Y MOSTRAR OBJETO

function checkObject(objstuff) {
  let objTemp = Math.round(objstuff.data.main.temp);
  let objCity = objstuff.data.name;

  let showCity = document.querySelector("h3");
  showCity.innerHTML = `${objCity}`;

  let showTemp = document.querySelector("h2");
  showTemp.innerHTML = `${objTemp}°C`;

  console.log(`It is ${objTemp}°C in ${objCity}.`);
}

//PREGUNTAR POR EL OBJETO Y ENCONTRAR OBJETO

function askObject(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  city.trim();

  let apiKey = "492c6e2ddde5d9a8edcbcb2a6951f7b7";
  let units = "metric";
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiCall).then(checkObject);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", askObject);

/*Button "current" uses the Geolocation API to get your GPS coordinates
and display the city and current temperature using the OpenWeather API.*/

//MOSTRAR OBJETO

function userObject(userstuff) {
  let objTemp = Math.round(userstuff.data.main.temp);
  let objCity = userstuff.data.name;

  let showCity = document.querySelector("h3");
  showCity.innerHTML = `${objCity}`;

  let showTemp = document.querySelector("h2");
  showTemp.innerHTML = `${objTemp}°C`;
}

//ENCONTRAR LUGAR-OBJETO

function userPosition(position) {
  let apiKey = "492c6e2ddde5d9a8edcbcb2a6951f7b7";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  console.log(apiCall);
  console.log(lat);
  console.log(lon);

  axios.get(apiCall).then(userObject);
}

function userCall(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(userPosition);
}

let position = document.querySelector("#current");
position.addEventListener("click", userCall);
