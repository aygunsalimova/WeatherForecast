let inp = document.querySelector("#inp");

inp.addEventListener("keypress", (e) => {
  if (e.keyCode == "13") {
    getCity(inp.value);
    inp.value = "";
    document.querySelector("#center").style.display = "block";
  }
});

async function getCity(cityName) {
  let weather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c358c9314e91f4abef4361069198898f&lang=az&units=metric`;

  let response = await fetch(weather);
  let data = await response.json();

  let city = document.querySelector("#city-name");
  city.innerHTML = `${data.name}, ${data.sys.country}`;

  let temp = document.querySelector("#temp");
  temp.innerHTML = `${Math.round(data.main.temp)}℃`;

  let description = document.querySelector("#description");
  description.innerHTML = `${data.weather[0].description}`;

  let minmax = document.querySelector("#minmax");
  minmax.innerHTML = `${Math.round(data.main.temp_min)}℃ / ${Math.round(
    data.main.temp_max
  )}℃`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Nisbi rütubət: ${data.main.humidity}%`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `Küləyin sürəti: ${data.wind.speed} m/s.`;

  console.log(data);
}
