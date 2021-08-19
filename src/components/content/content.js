let Content = (props) => {
    return <div>
        {/*<div>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ,ВЫ СОГЛАСНЫ?</div>*/}
        <div>Температура воздуха:{props.temp}</div>
        <div>Минимальная дневная температура воздуха: {props.tempMin}</div>
        <div>Максимальная дневная температура воздуха:{props.tempMax}</div>
        <div>Атмосферное давление составляет {props.pressure} единиц ртутного столба</div>
        {/*<div>{props.wind.speed}</div>*/}
    </div>
}
export default Content;
