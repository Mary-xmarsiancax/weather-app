import {getCurrentWeatherApi, getDailyWeatherApi} from "../services/weather-service";

const CHANGE_CURRENT_CITIES_NAME = "CHANGE_CURRENT_CITIES_NAME"
const SET_WEATHER = "SET_WEATHER"
const SET_DAILY_WEATHER = "SET_DAILY_WEATHER"
const SET_CITIES_NAME_NOT_FOUND = "SET_CITIES_NAME_NOT_FOUND"

export const onChangeCurrentCitiesName = (el) => ({type: CHANGE_CURRENT_CITIES_NAME, newCurrentCitiesName: el});
export const setWeather = (temp, tempMin, tempMax, pressure, humidity, speed) => ({
    type: SET_WEATHER, data:
        {temp, tempMin, tempMax, pressure, humidity, speed}

});
export const setDailyWeather = (daily) => ({type: SET_DAILY_WEATHER, daily});
export const setCitiesNameNotFound = (isFound) => ({type: SET_CITIES_NAME_NOT_FOUND, isFound});

let initialState = {
        temp: null,
        tempMin: null,
        tempMax: null,
        pressure: null,
        humidity: null,
        speed: null,
        currentCitiesName: "Готэм-Сити",
        daily: [],
        isFoundCitiesName: true
    }
;
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CITIES_NAME:
            return {
                ...state,
                currentCitiesName: action.newCurrentCitiesName,
            }

        case SET_WEATHER:
            return {
                ...state,
                ...action.data
            }

        case SET_DAILY_WEATHER:
            let copyState = {...state}
            copyState.daily = action.daily
            return copyState

        case SET_CITIES_NAME_NOT_FOUND:
            return {
                ...state,
                isFoundCitiesName: action.isFound
            }


        default:
            return state;
    }
}

export const getCurrentWeather = (citiesName) => (dispatch) => {
    getCurrentWeatherApi(citiesName)
        .then(response => {
            let {lon, lat} = {...response.data.coord};
            const data = {...response.data.main};
            let {speed} = response.data.wind;
            let {temp, temp_min, temp_max, pressure, humidity} = data;
            dispatch(setWeather(temp, temp_min, temp_max, pressure, humidity, speed));
            getDailyWeatherApi(lat, lon)
                .then(resp => {
                    let daily = resp.data.daily
                    dispatch(setDailyWeather(daily));
                })
        }, error => {
            dispatch(setCitiesNameNotFound(false))
        })
}

export default contentReducer;



