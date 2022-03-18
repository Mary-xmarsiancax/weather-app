import s from "./navBar.module.css"

let NavBar = (props) => {
    return <div className={s.NavWr}>
        <div className={s.nItems}>Узнать погоду в городе {props.currentCitiesName}</div>
    </div>
}
export default NavBar;

