import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import css from "../AppBar/AppBar.module.css";

export default function AppBar () {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.appBar}>
            <Navigation />
            <ThemeSwitcher />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}