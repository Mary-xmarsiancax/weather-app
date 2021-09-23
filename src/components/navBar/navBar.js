import {NavLink} from "react-router-dom";
import s from "./navBar.module.css"

let NavBar = (props) => {
    return <div className={s.NavWr}>
        <div className={s.nItems} onClick={() => props.getWeatherForThisCity(props.currentCitiesName)}>
            <NavLink to={"/weather"}>Узнать погоду в городе {props.currentCitiesName}</NavLink>
        </div>
        <div className={s.nItems}><NavLink to={"/now"}>СЕЙЧАС</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>СЕГОДНЯ</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>ЗАВТРА</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>3 ДНЯ</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>10 ДНЕЙ</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>2 НЕДЕЛИ</NavLink></div>
        <div className={s.nItems}><NavLink to={"/now"}>МЕСЯЦ</NavLink></div>
    </div>
}
export default NavBar;

