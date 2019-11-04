const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temparature-value p");
const descElement = document.querySelector(".temparature-description p");
const locElement = document.querySelector(".location");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temparature = {
    unit : "celsius"
}

const KELVIN = 273;

const key = "82005d27a116c2880c8f0fcb866998a0";

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`; 
}

function getWeather (latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch (api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temparature.value = Math.floor(data.main.temp - KELVIN);
        weather.desc = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temparature.value}°<span>C</span>`;
    descElement.innerHTML = weather.desc;
    locElement.innerHTML = `${weather.city}, ${weather.country}`;
}