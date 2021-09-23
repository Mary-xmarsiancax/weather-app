import s from "./content.module.css"
let Content = (props) => {
    return <div>
        <div className={s.header}>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ</div>
        <div className={s.contentWr}>
            <div className={s.content}>Средняя температура воздуха: <span>{props.temp}</span> градусов по Цельсию</div>
            <div className={s.content}>Минимальная дневная температура воздуха: <span>{props.tempMin}</span> градусов по Цельсию</div>
            <div className={s.content}>Максимальная дневная температура воздуха:<span>{props.tempMax}</span>  градусов по Цельсию</div>
            <div className={s.content}>Атмосферное давление составляет <span>{props.pressure}</span> мм рт. ст.</div>
            <div className={s.content}>Влажность <span>{props.humidity}</span> %</div>
            <div className={s.content}>Скорость ветра составляет <span>{props.speed}</span> м/с</div>
        </div>

    </div>
}

export default Content;
