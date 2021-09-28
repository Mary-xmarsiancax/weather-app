import s from "./header.module.css"
import sunny from "../../images/s12-1.png"
import {getCities} from "../../services/cities-service";
import React from 'react';


class Header extends React.Component {
    state = {
        currentCitiesName: null
    }
    onChangeCurrentCitiesNameLocal = (e) => {
        const city = e.currentTarget.value
        this.setState({
            currentCitiesName: city
        })

        if (getCities().map(city => city.toLowerCase()).includes(city.toLowerCase())) {
            this.setNewCitiesNameToGlobalState(city)
        }
    }

    setNewCitiesNameToGlobalState = (value) => {
        this.props.onChangeCurrentCitiesName(value);
        console.log(value);
    }

    log = (e) => {
        console.log(e.currentTarget.value);
    }

    render() {
        return (
            <div className={s.wrap}>
                <div className={s.hLogoImg}><img src={sunny} alt="sun"/></div>
                <div className={s.text}>ПОГОДА В МОЁМ ГОРОДЕ</div>
                <input placeholder="Выберите город" type="text" list="cities" name="citiesAbc" id="citiesAbc"
                       className={s.input}
                       onChange={this.onChangeCurrentCitiesNameLocal}
                    // onSelect={this.log}
                />
                <datalist id="cities">
                    {getCities().map((value, index) => {
                        return <option key={index} value={value} onSelect={this.log}/>
                    })
                    }
                </datalist>
            </div>
        )
    }
}

export default Header;
