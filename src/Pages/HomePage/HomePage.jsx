import css from "./HomePage.module.css";


export default function HomePage() {
    return (
        <div className={css.container} >
            <h1  className={css.title }>Welcome to the Contact Book App 📒</h1>
            <p className={css.text} >Keep your personal contacts safe and organized. Register or login to get started!</p>
            <p className={css.subtext}>Developed by Anastasiia Posliednichenko</p>
        </div>
    );
}