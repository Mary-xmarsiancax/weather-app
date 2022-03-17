import s from "./header.module.css"
import sunny from "../../images/s12-1.png"
import {getCities} from "../../services/cities-service";
import React from 'react';
import DataListInput from "react-datalist-input";

class Header extends React.Component {

    setNewCitiesNameToGlobalState = (value) => {
        this.props.onChangeCurrentCitiesName(value);
    }

    render() {
        return (
            <div className={s.wrap}>
                <div className={s.hLogoImg}><img src={sunny} alt="sun"/></div>
                <div className={s.text}>ПОГОДА В МОЁМ ГОРОДЕ</div>

<div className={s.input}>
    <DataListInput
        placeholder="Выберите город"
        items={getCities().sort().map((value, index) => ({key: index, label: value}))}
        onSelect={(value) => this.setNewCitiesNameToGlobalState(value.label)}
    />
</div>

            </div>
        )
    }
}

export default Header;
