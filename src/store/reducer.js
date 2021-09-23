import React from 'react';

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
const Reducer = (state = initialState, action) => {
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

export default Reducer;



