const cityInput = document.querySelector(".jsCityInput");  // Input field
const searchButton = document.querySelector(".jsSearch");  // Search button
const weatherInfo = document.querySelector(".jsWeatherInfo");  // Container to display weather

async function fetchWeather(city) {
  const apiKey = "13b32f5ce9a3681ab2b2a8a040ab19e3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('city not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch {
    weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
};


function displayWeather(data) {
  const { name, main, weather } = data;
  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Weather: ${weather[0].description}</p>
  `;
}

searchButton.addEventListener("click", () => {
  fetchWeather(cityInput.value.trim());
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchWeather(cityInput.value.trim());
  }
});