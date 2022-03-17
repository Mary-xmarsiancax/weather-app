import {connect} from "react-redux";
import Header from "./header";
import React from 'react';
import {onChangeCurrentCitiesName} from "../../store/contentReducer";

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
    currentCitiesName: state.contentStore.currentCitiesName,
})

export default connect(mapStateToProps, {onChangeCurrentCitiesName})(HeaderContainer);