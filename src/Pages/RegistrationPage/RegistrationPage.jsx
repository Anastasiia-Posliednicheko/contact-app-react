import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "../RegistrationPage/RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container} >
      <h2 className={css.title} >Register</h2>
      <RegistrationForm />
    </div>
  );
}
