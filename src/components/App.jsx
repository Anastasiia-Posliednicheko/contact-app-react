import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchContacts} from "../redux/contactsOps";


import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";

import css from "./App.module.css";



export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wraper}>
      <h1 className={css.title} >Phonebook</h1>
      <div className={css.container}>
        <div className={css.left}>
          <ContactForm />
          <SearchBox  />
        </div>
        <div className={css.right}>
          <ContactList />
        </div>
      </div>
    </div>
  );
}
