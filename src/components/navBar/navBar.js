import {NavLink} from "react-router-dom";
import s from "./navBar.module.css"

let NavBar = (props) => {
    return <div className={s.NavWr}>
        <div className={s.nItems} onClick={() => props.getWeatherForThisCity(props.currentCitiesName)}>
            <NavLink to="/weather">Узнать погоду в городе {props.currentCitiesName}</NavLink>
        </div>
        <div className={s.nItems}><NavLink to="/now">СЕЙЧАС</NavLink></div>
        <div className={s.nItems}><NavLink to="/today">СЕГОДНЯ</NavLink></div>
        <div className={s.nItems}><NavLink to="/tomorrow">ЗАВТРА</NavLink></div>
        <div className={s.nItems}><NavLink to="/3 days">3 ДНЯ</NavLink></div>
        <div className={s.nItems}><NavLink to="/10 days">10 ДНЕЙ</NavLink></div>
        <div className={s.nItems}><NavLink to="/2 week">2 НЕДЕЛИ</NavLink></div>
        <div className={s.nItems}><NavLink to="/month">МЕСЯЦ</NavLink></div>
    </div>
}
export default NavBar;

