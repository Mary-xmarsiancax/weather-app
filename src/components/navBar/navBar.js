import {NavLink} from "react-router-dom";
import s from "./navBar.module.css"

let NavBar = (props) => {
    return <div className={s.NavWr}><div className={s.nItems}>Узнать погоду в городе {props.currentCitiesName}</div>
        <div className={s.nItems} onClick={() => props.getWeatherForThisCityNow(props.currentCitiesName)}>
            <NavLink to="/atNowWeather">СЕЙЧАС</NavLink></div>
        <div className={s.nItems} onClick={()=> props.getWeatherForThisCityOnFourDays(props.currentCitiesName)}>
            <NavLink to="/onFourDaysWeather">НА 4 ДНЯ</NavLink></div>
        <div className={s.nItems}><NavLink to="/onSixteenDaysWeather">НА 16 ДНЕЙ</NavLink></div>
        <div className={s.nItems}><NavLink to="/onMonthWeather">НА МЕСЯЦ</NavLink></div>
    </div>
}
export default NavBar;

