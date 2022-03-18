import axios from "axios";

export const getCurrentWeatherApi = (citiesName) => {
    return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9&units=metric`)
    //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9d64cb7219261444377ecf9c36ed62d9`);
}

export const getDailyWeather = (coord) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}
    &exclude=current,minutely,hourly&appid=9d64cb7219261444377ecf9c36ed62d9`);
}

