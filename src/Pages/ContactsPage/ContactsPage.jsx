import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.box}>
        <h2 className={css.title}>Add New Contact</h2>
        <ContactForm />
        <h3 className={css.subtitle}>Search</h3>
        <SearchBox />
      </div>
      <div className={css.box}>
        <h2>Contact List</h2>
        <ContactList />
      </div>
    </div>
  );
}
