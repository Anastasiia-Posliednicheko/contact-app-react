import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

export default function AuthNav () {
    return (
        <div className={css.box}>
        <NavLink className={css.link} to="/register" >
          Register
        </NavLink>
        <NavLink className={css.link} to="/login" >
        Login
        </NavLink>
        </div>
    );
}
