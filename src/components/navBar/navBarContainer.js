import {connect} from "react-redux";
import React from 'react';
import NavBar from "./navBar";
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
                let {temp, temp_min, temp_max, pressure, humidity} = response.data.main;
                let {speed} = response.data.wind;
                this.props.setWeather(temp, temp_min, temp_max, pressure, humidity, speed);
            })
    }

    render = () => {
        return (

            <div>
                <NavBar currentCitiesName={this.props.currentCitiesName}
                        getWeatherForThisCity={this.getWeatherForThisCity}/>
            </div>

        )

    }

}

let mapStateToProps = (state) => ({
    currentCitiesName: state.headerState.currentCitiesName
})

export default connect(mapStateToProps, {setWeather})(NavBarContainer);