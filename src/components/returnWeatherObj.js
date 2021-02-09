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
        console.log(weatherData)
        return weatherData
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

};

const renderSearchUI = (() => {
    const submitBtn = document.querySelector('#search-btn');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        getWeatherUrl()
    })
    
})();

/* const renderWeatherToDom = () => {
    const container = document.querySelector('#search-results-container');
    const location = document.createElement('h1');
    const temperature = document.createElement('span');
    const feelsLikeTemp = document.createElement('span');
    const minTemp = document.createElement('span');
    const maxTemp = document.createElement('span');
    const humidity = document.createElement('span');

    location.textContent = weatherData.name;

    temperature.textContent = `${weatherData.main[temp]}&#176;`

    feelsLikeTemp.textContent = `${weatherData.main[feels_like]}&#176;`

    minTemp.textContent = `${weatherData.main[temp_min]}&#176;`;

    maxTemp.textContent = `${weatherData.main[temp_max]}&#176;`;

    humidity.textContent = `${weatherData.main[humidity]}&#176;`;

    container.appendChild(location)
    container.appendChild(temperature)
    container.appendChild(feelsLikeTemp)
    container.appendChild(minTemp)
    container.appendChild(maxTemp)
    container.appendChild(humidity);
}; */


export { renderSearchUI }