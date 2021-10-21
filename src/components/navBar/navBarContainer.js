import {connect} from "react-redux";
import React from 'react';
import NavBar from "./navBar";
import {setWeather} from "../../store/reducer";
import axios from "axios";


class NavBarContainer extends React.Component {

    getWeatherForThisCityNow = (citiesName) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9&units=metric`)
            .then(response => {
                const data = {...response.data.main};
                // const keys = Object.keys(data).filter(el => el.indexOf("temp") >= 0);
                // keys.forEach(el => data[el] = Math.round(data[el] - 273.15));
                let {speed} = response.data.wind;
                let {temp, temp_min, temp_max, pressure, humidity} = data;
                this.props.setWeather(temp, temp_min, temp_max, pressure, humidity, speed);
            })
    }

    getWeatherForThisCityOnFourDays = (citiesName) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9&units=metric&cnt=96`)
            .then(response => {
                const data = {...response.data.main};
                let {speed} = response.data.wind;
                let {temp, temp_min, temp_max, pressure, humidity} = data;
                this.props.setWeather(temp, temp_min, temp_max, pressure, humidity, speed);
            })
    }

    render = () => {
        return (
                <NavBar currentCitiesName={this.props.currentCitiesName}
                        getWeatherForThisCityNow={this.getWeatherForThisCityNow}
                        getWeatherForThisCityOnFourDays = {this.getWeatherForThisCityOnFourDays}/>

        )

    }

}

let mapStateToProps = (state) => ({
    currentCitiesName: state.headerState.currentCitiesName
})

export default connect(mapStateToProps, {setWeather})(NavBarContainer);