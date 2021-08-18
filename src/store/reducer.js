import React from 'react';
const CHANGE_CURRENT_CITIES_NAME="CHANGE_CURRENT_CITIES_NAME"
export const onChangeCurrentCitiesName= (el) => ({type: CHANGE_CURRENT_CITIES_NAME, newCurrentCitiesName: el});


let initialState = {
        // citiesNames: ["NN", "Msc"],
        temp: null,
        tempMin: null,
        tempMax: null,
        pressure: null,
        humidity: null,
        windSpeed: null,
    currentCitiesName:"NN"
    }
;
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CITIES_NAME:
            return {
                ...state,
                currentCitiesName:action.newCurrentCitiesName,

            }

        default:
            return state;
    }
}


    export default Reducer;


// let getWeatherForThisCity=()=>{
//
//     }
//где повесить обработчик,который сделает запрос на сервак после изменения названия города
