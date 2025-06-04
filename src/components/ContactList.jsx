import { useSelector } from "react-redux";
import {selectFilteredContacts} from "../redux/contactsSlice";
import Contact from "./Contact";
import css from "./ContactList.module.css";


export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
    return (
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    );
  }