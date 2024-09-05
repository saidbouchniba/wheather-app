
const Apikey = "20f3c53beb467d57ab1bed85ca075696";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city) {
  const response = await fetch(apiURL + city + `&appid=${Apikey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "KMH";
    if (data.weather[0].main === "Clouds") {
      weathericon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weathericon.src = "weather-app-img/images/clear.png";
    } else if(data.weather[0].main === "Rain") {
        weathericon.src = "weather-app-img/images/rain.png";
    } else if(data.weather[0].main === "Drizzle"){
        weathericon.src = "weather-app-img/images/drizzle.png";
    } else if(data.weather[0].main === "Mist"){
        weathericon.src = "weather-app-img/images/mist.png";
    } else if(data.weather[0].main === "Snow"){
        weathericon.src = "weather-app-img/images/snow.png"; 
    }




    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", function () {
  checkweather(searchBox.value);
});