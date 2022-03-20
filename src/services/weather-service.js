import axios from "axios";

export const getCurrentWeatherApi = (citiesName) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9&units=metric`)
}

export const getDailyWeatherApi = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}`
        + `&exclude=current,minutely,hourly&appid=9d64cb7219261444377ecf9c36ed62d9&units=metric`);
}

