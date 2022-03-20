import s from "./portal.module.css"

const PortalComponent = (props) => {

    const setCitiesNameIsFound = () => {
        props.setCitiesNameNotFound(true)
    }

    return (
        <div className={s.portal}>
            <div className={s.portalBlock} onClick={setCitiesNameIsFound}>
                ДАННЫЕ О ПОГОДЕ В ВАШЕМ ГОРОДЕ НЕ НАЙДЕНЫ
            </div>

        </div>
    )
}
export default PortalComponent