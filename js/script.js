let city = document.getElementById("city");
let sabt = document.getElementById("sabt");
let shahr = document.getElementById("shahr");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");
let aftabi = document.getElementById("aftabi");
let abri = document.getElementById("abri");
let barani = document.getElementById("barani");
let barfi = document.getElementById("barfi");
let wind = document.getElementById("wind");


const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
async function getWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
      ${city.value}&appid=${apiKey}`)
  ).json();
  console.log(weatherResult);
  setInfo(weatherResult);
}
function conver(value) {
  return (value - 273).toFixed(2);
}
sabt.addEventListener("click", getWeather);
function setInfo(data) {
  var cityName = data["name"];
  var descrip = data["weather"][0]["main"];
  var temp1 = data["main"]["temp"];
  var wind1 = data["wind"]["speed"];
  var ax = data["weather"][0]["main"];
  shahr.innerHTML = `city:${cityName}`;
  desc.innerHTML = `description:${descrip}`;
  temp.innerHTML = `temp:${conver(temp1)}`;
  wind.innerHTML = `wind:${wind1}km/h`;
  if (data["weather"][0]["main"] === "Clear") {
    aftabi.style.display = "block";
    abri.style.display = "none";
    barfi.style.display = "none";
    barani.style.display = "none";
  } else if (data["weather"][0]["main"] === "Rain") {
    aftabi.style.display = "none";
    abri.style.display = "none";
    barfi.style.display = "none";
    barani.style.display = "block";
  } else if (data["weather"][0]["main"] === "Cloud" || "Haze") {
    aftabi.style.display = "none";
    abri.style.display = "block";
    barfi.style.display = "none";
    barani.style.display = "none";
  } else if (data["weather"][0]["main"] === "Snow") {
    aftabi.style.display = "none";
    abri.style.display = "none";
    barfi.style.display = "block";
    barani.style.display = "none";
  }
}



