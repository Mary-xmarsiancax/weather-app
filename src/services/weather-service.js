import axios from "axios";

export const getCurrentWeather = (cityName) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9d64cb7219261444377ecf9c36ed62d9`);
}

export const getDailyWeather = (coord) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}
    &exclude=current,minutely,hourly&appid=9d64cb7219261444377ecf9c36ed62d9`);
}

export const getWeather = (cityName) => {
    return new Promise(((resolve, reject) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9d64cb7219261444377ecf9c36ed62d9`,
            {method: "GET", 'Content-Type': 'application/json'})
            .then(value => resolve(value.json())).catch(reason => reject(reason));
    }));
}
