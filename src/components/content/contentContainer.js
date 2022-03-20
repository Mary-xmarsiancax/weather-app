import React from 'react';
import Content from "./content";
import {connect} from "react-redux";
import {setCitiesNameNotFound} from "../../store/contentReducer";


class ContentContainer extends React.Component {
    componentDidMount() {

    }

    render = () => {
        return <div>
                <Content temp={this.props.temp}
                         tempMin={this.props.tempMin}
                         tempMax={this.props.tempMax}
                         pressure={this.props.pressure}
                         humidity={this.props.humidity}
                         speed={this.props.speed}
                         setCitiesNameNotFound={this.props.setCitiesNameNotFound}/>
        </div>
    }

}

let mapStateToProps = (state) => ({
    temp: state.contentStore.temp,
    tempMin: state.contentStore.tempMin,
    tempMax: state.contentStore.tempMax,
    pressure: state.contentStore.pressure,
    humidity: state.contentStore.humidity,
    speed: state.contentStore.speed,
    currentCitiesName: state.contentStore.currentCitiesName
})
export default connect(mapStateToProps, {setCitiesNameNotFound})(ContentContainer);