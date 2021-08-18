import {connect} from "react-redux";
import Content from "./content";
import React from "react";
import {getCurrentWeather, getWeather} from "../../services/weather-service";


class ContentContainer extends React.Component {
    componentDidMount() {
    }

    render = () => {
        return <div>
            <Content {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(ContentContainer);