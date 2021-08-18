import {connect} from "react-redux";
import Header from "./header";
import React from 'react';
import {onChangeCurrentCitiesName} from "../../store/reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
    }

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