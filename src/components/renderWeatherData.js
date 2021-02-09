const clearDiv = () => {
    const container = document.getElementById('display-results-container');
    if(container) {
        container.remove()
    }
}

const renderWeatherToDom = (weatherData) => {
    clearDiv()
    const container = document.createElement('div') 
    container.setAttribute('id','display-results-container');
    

    const location = document.createElement('h1');
    const currentTime = document.createElement('span');
    const dataWrap = document.createElement('div');
    const temperature = document.createElement('span');
    const feelsLikeTemp = document.createElement('span');
    const minTemp = document.createElement('span');
    const maxTemp = document.createElement('span');
    const humidity = document.createElement('span');

    const time = new Date().toLocaleTimeString(['en-us'], {hour: '2-digit', minute: '2-digit'})

    location.setAttribute('id', 'location');
    location.textContent = weatherData.name;

    currentTime.setAttribute('id', 'current-time')
    currentTime.textContent = time;

    dataWrap.setAttribute('id', 'data-wrap');

    temperature.textContent = `Current Temperature: ${weatherData.main.temp}\xB0C`

    feelsLikeTemp.textContent = `Feels Like: ${weatherData.main.feels_like}\xB0C`

    minTemp.textContent = `Today's Low: ${weatherData.main.temp_min}\xB0C`;

    maxTemp.textContent = `Today's High: ${weatherData.main.temp_max}\xB0C`;

    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

    dataWrap.appendChild(temperature);
    dataWrap.appendChild(feelsLikeTemp);
    dataWrap.appendChild(minTemp);
    dataWrap.appendChild(maxTemp);
    dataWrap.appendChild(humidity);

    container.appendChild(location);
    container.appendChild(currentTime);
    container.appendChild(dataWrap);

    document.querySelector('#root').appendChild(container);
    container.classList.add('fade-in');
    
};

export { renderWeatherToDom };