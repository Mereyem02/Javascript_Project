async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = 'f11284607d3d4a634a1890f93922e9af'; // Replace with your own OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").innerHTML =
      `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">`;

  } catch (error) {
    alert("City not found!");
  }
}
