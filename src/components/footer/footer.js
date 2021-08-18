import s from "./footer.module.css"
import fLogo from "../../images/cloud.png"

let Footer =(props)=> {
    return <div className={s.fWr}>
        <div className={s.footerText}>
            ОДЕВАЙТЕСЬ ПО ПОГОДЕ!
        </div>
        <div className={s.fLogo}><img src={fLogo} alt="flogo"/></div>
    </div>
}
export default Footer;