import {connect} from "react-redux";
import React from 'react';
import NavBar from "./navBar";
import Content from "../content/content";
import {setWeather} from "../../store/reducer";
import axios from "axios";


class NavBarContainer extends React.Component {
    componentDidMount() {

    }

    let
    getWeatherForThisCity = (citiesName) => {
        console.log(citiesName)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9`)
            .then(response => {
                let {temp,temp_min,temp_max,pressure,humidity} = response.data.main;
                this.props.setWeather(temp,temp_min,temp_max,pressure,humidity);
                         })
    }

    render = () => {
        return (
            <div>
                <NavBar currentCitiesName={this.props.currentCitiesName}
                        getWeatherForThisCity={this.getWeatherForThisCity}/>
                <Content temp={this.props.temp}
                tempMin={this.props.tempMin}
                tempMax={this.props.tempMax}
                pressure={this.props.pressure}
                humidity={this.props.humidity} />
            </div>

        )

    }

}

let mapStateToProps = (state) => ({
    currentCitiesName: state.headerState.currentCitiesName,
    temp: state.headerState.temp,
    tempMin: state.headerState.tempMin,
    tempMax: state.headerState.tempMax,
    pressure: state.headerState.pressure,
    humidity: state.headerState.humidity,
})

export default connect(mapStateToProps, {setWeather})(NavBarContainer);