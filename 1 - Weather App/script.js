const apikey = "25fb01327979dc4bfaf01a44f70d20b4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.input');
const searchBtn = document.querySelector('.button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    if (data.main) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    } else {
        alert('City not found!');
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

