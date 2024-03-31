async function checkWeather(city) {

    const apiKey = "2fb40ff1429b5d0e47079992776addc6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
            console.log(data)
            document.getElementById('temp').innerHTML = data.main.temp+`°C`;
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('humidity').innerHTML = data.main.humidity + "%";
            document.getElementById('wind').innerHTML = data.wind.speed ;
            if(data.weather[0].main=="Clouds"){
                weather.src ="clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                weather.src ="clear.png";
                
            }
            else if(data.weather[0].main=="Rain"){
                weather.src ="rain.png";
               
            }
            else if(data.weather[0].main=="Drizzle"){
                weather.src ="drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weather.src ="mist.png";
            }
            else if(data.weather[0].main=="Haze"){
                weather.src ="mist.png";
            }
            else if(data.weather[0].main=="Snow"){
                weather.src ="snow.png";
            }

        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

let inputValue = document.getElementById('input-Box');
document.getElementById('btn').addEventListener('click', function () {
    checkWeather(inputValue.value);
});