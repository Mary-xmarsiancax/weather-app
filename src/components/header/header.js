import s from "./header.module.css"
import sunny from "../../images/s12-1.png"
import {getCities} from "../../services/cities-service";


let Header =(props)=>{

    let onChangeCurrentCitiesName = (event) => {
        let el = event.target.value;
        props.onChangeCurrentCitiesName(el);
    }



    return <div className={s.wrap}>
        <div className={s.hLogoImg}><img src={sunny} alt="sun"/></div>
        <div className={s.text}>ПОГОДА В МОЁМ ГОРОДЕ</div>
        <select className={s.select} onChange={onChangeCurrentCitiesName} value={props.currentCitiesName}>
            <option>МОЙ ГОРОД</option>
            {getCities().map((value, index) => {
                return <option key={index} value={value}>{value}</option>
            })}
        </select>
           </div>
    }
    export default Header;