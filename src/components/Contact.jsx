import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import css from "./ContactList.module.css";


export default function Contact({id, name, number }){
    const dispatch = useDispatch();
    return (
        <div className={css.item}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.number}>{number}</p>
            <button className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );

}