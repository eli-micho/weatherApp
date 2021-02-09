const rootDiv = document.querySelector('#root');
const api_key = 'a3b38d6618c940cbb6fa276b682987de';

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
    const city = document.querySelector('#searchInput').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    console.log(returnWeatherCall(url))
};

const renderSearchUI = (() => {
    const weatherForm = document.createElement('form');
    const searchInput = document.createElement('input');
    const submitBtn = document.createElement('input');

    searchInput.setAttribute('type', 'text');
    searchInput.placeholder = 'Enter City Name';
    searchInput.setAttribute('id', 'searchInput');

    submitBtn.setAttribute('type', 'submit');
    submitBtn.value = 'Search';
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        getWeatherUrl()
    })

    weatherForm.appendChild(searchInput);
    weatherForm.appendChild(submitBtn);
    rootDiv.appendChild(weatherForm);

    
})();


/* async const returnWeatherCall = (() => {
    const res = await fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=2da748d9476b735afba174a20b75539a')
})();
 */
export { renderSearchUI }