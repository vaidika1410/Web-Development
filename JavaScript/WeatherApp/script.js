document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById('city-input')
    const getWeatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const temperatureDisplay = document.getElementById('temperature')
    const description = document.getElementById('description')
    const errorMessage = document.getElementById('error-message')

    const API_KEY = "c4ef86a78a4b6531fc51f7bbe33056b2"

    getWeatherBtn.addEventListener("click", async function(){
        const city = cityInput.value.trim();
        console.log(city)

        if(!city) return;

        // it may throw an error -> wrap around try-catch
        // server might be in another continent -> takes time, thus use async await
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }
    })

    async function fetchWeatherData(city){
        // gets the data by using API Call
    }

    function displayWeatherData(weatherData){
        // displays the weather data
    }

    function displayError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }
})