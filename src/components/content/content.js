let Content = (props) => {
    return <div>
        {/*<div>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ,ВЫ СОГЛАСНЫ?</div>*/}
        <div>{props.temp}</div>
        <div>{props.temp_min}</div>
        <div>{props.temp_max}</div>
        <div>{props.pressure}</div>
        {/*<div>{props.wind.speed}</div>*/}
    </div>
}
export default Content;
