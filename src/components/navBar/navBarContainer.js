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
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9`)
        //     .then(response => {
        //         let {itemp,tempMin,tempMax,pressure,humidity} = response.data.main;
        //         this.props.setWeather(itemp,tempMin,tempMax,pressure,humidity);
        //                  })
    }

    render = () => {
        return (
            <div>
                <NavBar currentCitiesName={this.props.currentCitiesName}
                />
                <Content {...this.props}/>
            </div>

        )

    }

}

let mapStateToProps = (state) => ({
    currentCitiesName: state.headerState.currentCitiesName
})

export default connect(mapStateToProps, {setWeather})(NavBarContainer);