import s from "./header.module.css"
import sunny from "../../images/s12-1.png"
import {getCities} from "../../services/cities-service";


let Header = (props) => {

    let onChangeCurrentCitiesName = (event) => {
        let el = event.target.value;
        props.onChangeCurrentCitiesName(el);
    }
    return <div className={s.wrap}>
        <div className={s.hLogoImg}><img src={sunny} alt="sun"/></div>
        <div className={s.text}>ПОГОДА В МОЁМ ГОРОДЕ</div>
        <input type="text" list="cities" name="citiesAbc" id="citiesAbc"
               className={s.input}
            onChange={onChangeCurrentCitiesName}/>
        <datalist id="cities">
            <option value="МОЙ ГОРОД"/>
            {getCities().map((value, index) => {
                return <option key={index} value={value}/>
                    })
            }
        </datalist>
    </div>
}
 export default Header;
