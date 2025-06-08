import LoginForm from "../../components/LoginForm/loginForm";
import css from "./LoginPage.module.css";


export default function LoginPage() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Login</h2>
            <LoginForm />
        </div>
    );
}