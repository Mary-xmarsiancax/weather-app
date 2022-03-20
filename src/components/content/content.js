import s from "./content.module.css"
import ContentOfStart from "./contentOfStart";
import {useSelector} from "react-redux";
import PortalComponent from "./portalComponent";

const Content = (props) => {
    const temp = useSelector((state) => state.contentStore.temp)
    const daily = useSelector((state) => state.contentStore.daily)
    const isFoundCitiesName = useSelector((state) => state.contentStore.isFoundCitiesName)
    let dailyEl = daily.map(day =>
        <div className={s.dayOfWeeksItem} key={day.dt}>
            <h5>{new Date(day.dt * 1000).toLocaleDateString().split(".").splice(0, 2).join(".")}</h5>
            {day.temp.day}
        </div>
    )
    return (
        <div>
            {
                temp ?
                    <div>
                        <div>
                            <div className={s.header}>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ
                            </div>
                            <div className={s.contentWr}>
                                <div className={s.content}>Средняя температура
                                    воздуха: <span>{props.temp}</span> градусов
                                    по Цельсию
                                </div>
                                <div className={s.content}>Минимальная дневная температура
                                    воздуха: <span>{props.tempMin}</span> градусов по Цельсию
                                </div>
                                <div className={s.content}>Максимальная дневная температура
                                    воздуха:<span>{props.tempMax}</span> градусов по Цельсию
                                </div>
                                <div className={s.content}>Атмосферное давление
                                    составляет <span>{props.pressure}</span> мм
                                    рт. ст.
                                </div>
                                <div className={s.content}>Влажность <span>{props.humidity}</span> %</div>
                                <div className={s.content}>Скорость ветра составляет <span>{props.speed}</span> м/с
                                </div>
                            </div>
                        </div>
                        <div className={s.sevenDaysWeather}>
                            {dailyEl}
                        </div>
                    </div>
                    :
                    !isFoundCitiesName ?
                        <PortalComponent setCitiesNameNotFound={props.setCitiesNameNotFound}/>
                        :
                        <ContentOfStart/>
            }
        </div>
    )
}
export default Content;
