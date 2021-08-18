import React from 'react';
const CHANGE_CURRENT_CITIES_NAME="CHANGE_CURRENT_CITIES_NAME"
// const GET_WEATHER_FOR_THIS_CITY="GET_WEATHER_FOR_THIS_CITY"
const SET_WEATHER="SET_WEATHER"
export const onChangeCurrentCitiesName= (el) => ({type: CHANGE_CURRENT_CITIES_NAME, newCurrentCitiesName: el});
// export const getWeatherForThisCity= (el) => ({type: GET_WEATHER_FOR_THIS_CITY, newCurrentCitiesName: el});
export const setWeather= (temp,tempMin,tempMax,pressure,humidity) => ({type: SET_WEATHER, data:{temp,tempMin,tempMax,pressure,humidity} });


let initialState = {
        temp: null,
        tempMin: null,
        tempMax: null,
        pressure: null,
        humidity: null,
        // windSpeed: null,
    currentCitiesName:"Готэм-Сити"
    }
;
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CITIES_NAME:
            return {
                ...state,
                currentCitiesName:action.newCurrentCitiesName,

            }
        // case GET_WEATHER_FOR_THIS_CITY:
        //     return {
        //         ...state,
        //         currentCitiesName:action.newCurrentCitiesName,
        //
        //     }
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



