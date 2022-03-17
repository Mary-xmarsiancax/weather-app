import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    headers: {
        "API-KEY":
            "9d64cb7219261444377ecf9c36ed62d9"
    }
})

export const weatherNowAPI = {
    getWeatherNow (citiesName) {
        return instance.get(`weather?q=${citiesName}&units=metric`)
    }
}