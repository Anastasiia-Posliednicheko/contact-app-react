import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

export default function AuthNav () {
    return (
        <div>
        <NavLink to="/register" className={({isActive}) => (isActive ? css.active : css.link)}>
          Register
        </NavLink>
        <NavLink to="/login" className={({isActive}) => (isActive ? css.active : css.link)}>
          Login 
        </NavLink>
        </div>
    );
}
