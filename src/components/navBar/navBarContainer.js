import {connect} from "react-redux";
import React from 'react';
import NavBar from "./navBar";


class NavBarContainer extends React.Component {

    render = () => {

        return (
                <NavBar currentCitiesName={this.props.currentCitiesName}
                />
        )
    }
}

let mapStateToProps = (state) => ({
    currentCitiesName: state.contentStore.currentCitiesName
})

export default connect(mapStateToProps, {})(NavBarContainer);