import s from "./portal.module.css"

const PortalComponent = (props) => {

    const setCitiesNameIsFound = () => {
        setTimeout(()=>{ props.setCitiesNameNotFound(true)},3000)
       
    }
    setCitiesNameIsFound()
    return (
        <div className={s.portal}>
            <div className={s.portalBlock}>
                ДАННЫЕ О ПОГОДЕ В ВАШЕМ ГОРОДЕ НЕ НАЙДЕНЫ
            </div>

        </div>
    )
}
export default PortalComponent