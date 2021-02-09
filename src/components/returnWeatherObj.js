const api_key = 'a3b38d6618c940cbb6fa276b682987de';

const validateCity = () => {
    if(document.querySelector('#search-input').value == ''){
        return true
    }
};

const renderError = () => {
    document.querySelector('#error-message-container').style.display = 'block';
}

async function returnWeatherCall(url) {
    try{
        const res = await fetch(url, {mode: "cors"});
        const weatherData = await res.json();
        renderWeatherToDom(weatherData)
    }catch(err){
        console.log(err)
    }
};


const getWeatherUrl = () => {
    if(validateCity()){
        renderError();
        return false
    };
    const city = document.querySelector('#search-input').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    returnWeatherCall(url)
};

const renderSearchUI = (() => {
    const submitBtn = document.querySelector('#search-btn');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        getWeatherUrl()
    })
    
})();

const renderWeatherToDom = (weatherData) => {
    console.log(weatherData.name)
    const container = document.querySelector('#display-results-container');
    const location = document.createElement('h1');
    const temperature = document.createElement('span');
    const feelsLikeTemp = document.createElement('span');
    const minTemp = document.createElement('span');
    const maxTemp = document.createElement('span');
    const humidity = document.createElement('span');

    const time = new Date()

    location.textContent = weatherData.name + ` ${time.toLocaleTimeString()}`;

    temperature.textContent = `${weatherData.main.temp}\xB0`

    feelsLikeTemp.textContent = `${weatherData.main.feels_like}\xB0`

    minTemp.textContent = `${weatherData.main.temp_min}\xB0`;

    maxTemp.textContent = `${weatherData.main.temp_max}\xB0`;

    humidity.textContent = `${weatherData.main.humidity}%`;

    container.appendChild(location)
    container.appendChild(temperature)
    container.appendChild(feelsLikeTemp)
    container.appendChild(minTemp)
    container.appendChild(maxTemp)
    container.appendChild(humidity);
};


export { renderSearchUI }