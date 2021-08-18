import {connect} from "react-redux";
import Header from "./header";
import React from 'react';
import {onChangeCurrentCitiesName} from "../../store/reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
    }

    // onChangedCitiesName = (citiesName) => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=9d64cb7219261444377ecf9c36ed62d9`)
    //         .then(response => {
    //             this.props.setWeatherForThisCity(response.data.items)
    //         })
    // }

    render = () => {
        return (
            <Header {...this.props}/>
        )

    }

}

let mapStateToProps = (state) => ({
    currentCitiesName: state.headerState.currentCitiesName,
})

export default connect(mapStateToProps, {onChangeCurrentCitiesName})(HeaderContainer);