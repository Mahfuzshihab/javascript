/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/


function getWeather() {
    var city = document.getElementById('city').value;  
    var apiKey = 'cbf99db42f435bb992d3802be6bfd5e7';  
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        document.getElementById('weather-result').innerHTML = 'Please enter a city name.';
        return;
    }

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.cod === '404') {
                document.getElementById('weather-result').innerHTML = '<span class="error">City not found!</span>';
            } else {
                var weatherInfo = `
                    <h3>Weather in ${data.name}, ${data.sys.country}</h3>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherInfo;
            }
        })
        .catch(function(error) {
            document.getElementById('weather-result').innerHTML = '<span class="error">An error occurred. Please try again later.</span>';
        });
}

document.getElementById('get-weather-btn').addEventListener('click', getWeather);
