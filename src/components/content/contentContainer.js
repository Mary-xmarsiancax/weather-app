import {connect} from "react-redux";
import Content from "./content";
import React from "react";
import {getCurrentWeather, getWeather} from "../../services/weather-service";



class ContentContainer extends React.Component {
    componentDidMount() {
        // getCurrentWeather("Moscow").then(value => console.log(value));
    }

    render = () => {
        return <div>
            <Content {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => {
return {

}
}

export default connect(mapStateToProps,{})(ContentContainer);