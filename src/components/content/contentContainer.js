import React from 'react';
import Content from "./content";
import {connect} from "react-redux";
import ContentOfStart from "./contentOfStart";


class ContentContainer extends React.Component {
    componentDidMount() {

    }

    render = () => {
        return <div>
            {this.props.currentCitiesName === "Готэм-Сити" ?
                <ContentOfStart/> :
                <Content temp={this.props.temp}
                         tempMin={this.props.tempMin}
                         tempMax={this.props.tempMax}
                         pressure={this.props.pressure}
                         humidity={this.props.humidity}
                         speed={this.props.speed}/>
            }
        </div>
    }

}

let mapStateToProps = (state) => ({
    temp: state.headerState.temp,
    tempMin: state.headerState.tempMin,
    tempMax: state.headerState.tempMax,
    pressure: state.headerState.pressure,
    humidity: state.headerState.humidity,
    speed: state.headerState.speed,
    currentCitiesName: state.headerState.currentCitiesName
})
export default connect(mapStateToProps, {})(ContentContainer);