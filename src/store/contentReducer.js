import React from 'react';
import {getCurrentWeatherApi} from "../services/weather-service";

const CHANGE_CURRENT_CITIES_NAME = "CHANGE_CURRENT_CITIES_NAME"
const SET_WEATHER = "SET_WEATHER"
export const onChangeCurrentCitiesName = (el) => ({type: CHANGE_CURRENT_CITIES_NAME, newCurrentCitiesName: el});
export const setWeather = (temp, tempMin, tempMax, pressure, humidity, speed) => ({
    type: SET_WEATHER,
    data: {temp, tempMin, tempMax, pressure, humidity, speed}
});

let initialState = {
        temp: null,
        tempMin: null,
        tempMax: null,
        pressure: null,
        humidity: null,
        speed: null,
        currentCitiesName: "Готэм-Сити"
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

        default:
            return state;
    }

}
export const getCurrentWeather = (citiesName) => (dispatch) => {
    getCurrentWeatherApi(citiesName)
        .then(response => {
            const data = {...response.data.main};
            let {speed} = response.data.wind;
            let {temp, temp_min, temp_max, pressure, humidity} = data;
            dispatch(setWeather(temp, temp_min, temp_max, pressure, humidity, speed));
        })
}

export default contentReducer;



