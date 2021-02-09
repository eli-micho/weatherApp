import { api_key } from './../../apikey';
import { validateInput, renderError } from './handleErrors';
import { renderWeatherToDom } from './renderWeatherData';

async function returnWeatherCall(url) {
    try{
        const res = await fetch(url, {mode: "cors"});
        const weatherData = await res.json();
        renderWeatherToDom(weatherData)
    }catch(err){
        renderError()
    }
};

const getWeatherUrl = () => {
    const city = document.querySelector('#search-input').value;
    if(validateInput(city)) return false;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    returnWeatherCall(url)
};

const renderSearchUI = (() => {
    const submitBtn = document.querySelector('#search-btn');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        getWeatherUrl()
    });
    
})();


export { renderSearchUI }