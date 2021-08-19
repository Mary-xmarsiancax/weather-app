import {connect} from "react-redux";
import React from 'react';
import Content from "./content";


class ContentContainer extends React.Component {
    componentDidMount() {

    }
    render = () => {
     
        return (
            <div>
                <Content temp={this.props.temp}
                         tempMin={this.props.tempMin}
                         tempMax={this.props.tempMax}
                         pressure={this.props.pressure}
                         humidity={this.props.humidity}
                         speed={this.props.speed}/>
            </div>

        )

    }

}

let mapStateToProps = (state) => ({
    temp: state.headerState.temp,
    tempMin: state.headerState.tempMin,
    tempMax: state.headerState.tempMax,
    pressure: state.headerState.pressure,
    humidity: state.headerState.humidity,
    speed: state.headerState.speed
})

export default connect(mapStateToProps, {})(ContentContainer);