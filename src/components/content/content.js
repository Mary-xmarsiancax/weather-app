import s from "./content.module.css"
let Content = (props) => {
    return <div>
        <div className={s.header}>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ</div>
        <div className={s.contentWr}>
            <div>Средняя температура воздуха: <span>{props.temp}</span> градусов по Цельсию</div>
            <div>Минимальная дневная температура воздуха: {props.tempMin} градусов по Цельсию</div>
            <div>Максимальная дневная температура воздуха: {props.tempMax} градусов по Цельсию</div>
            <div>Атмосферное давление составляет {props.pressure} мм рт. ст.</div>
            <div>Влажность {props.humidity} </div>
            <div>Скорость ветра составляет {props.speed} м/с</div>
        </div>

    </div>
}

export default Content;
