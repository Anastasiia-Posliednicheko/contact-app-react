import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "../ContactsPage/ContactsPage.module.css";

export default function Contactspage () {
    return (
        <div className={css.container}>
            <div className={css.box}>
                <h2 className={css.title}>Add New Contact</h2>
                <ContactForm />
                <h3 className={css.sub-title}>Search</h3>
                <SearchBox />
            </div>
            <div className={css.box}>
                <h2>Contact List</h2>
                <ContactList />
            </div>
        </div>
    );
}