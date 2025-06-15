import { useDispatch, useSelector } from "react-redux";
import { logout} from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import css from "../UserMenu/UserMenu.module.css";

export default function UserMenu () {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return(
        <div className={css.container} >
            <span className={css.username}>Welcome, {user.name}</span>
            <button className={css.button} onClick={() => dispatch(logout())}>
              Logout
            </button>
        </div>
    );
}