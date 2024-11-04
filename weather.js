const apiKey = https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 
const url = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('city-input-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    const response = await fetch(`${url}?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.ok) {
        displayWeather(data);
    } else {
        alert('City not found. Please try again.');
    }
}

function displayWeather(data) {
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('date').innerText = new Date().toLocaleString();
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('weather-info').style.display = 'block';
}