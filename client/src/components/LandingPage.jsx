import { NavLink } from "react-router-dom";
import style from "../styles/Landing.module.css"

const LandingPage =()=>{
return (
    <div className={style.landing}>
         <NavLink to="/HomePage">
            <button className={style.boton}>Home</button>
            </NavLink>
    </div>
)
}
export default LandingPage;