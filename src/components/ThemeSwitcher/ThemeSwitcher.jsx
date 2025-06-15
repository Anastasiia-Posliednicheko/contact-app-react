import { useEffect, useState } from "react";
import css from "../ThemeSwitcher/ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.body.classList.toggle('dark');;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button  className={css.button} onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}