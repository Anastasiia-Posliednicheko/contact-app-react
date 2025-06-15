import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
import css from "../Contact/Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, number });

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`Contact "${name}" deleted!`);
    } catch {
      toast.error("Failed to delete contact");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ name, number });
  };

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async e => {
    e.preventDefault();
    try {
      const result = await dispatch(updateContact({ id, ...formData })).unwrap();
      toast.success(`Contact "${result.name}" updated!`);
      setIsEditing(false);
    } catch {
      toast.error("Failed to update contact");
    }
  };

  if (isEditing) {
    return (
      <form className={css.item} onSubmit={handleSave}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={css.input}
          placeholder="Name"
          required
        />
        <input
          name="number"
          value={formData.number}
          onChange={handleChange}
          className={css.input}
          placeholder="Phone"
          required
        />
        <div className={css.actions}>
          <button type="submit" className={css.button}>Save</button>
          <button type="button" className={css.button} onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className={css.item} tabIndex={0}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.number}>{number}</p>
      <div className={css.actions}>
        <button className={css.button} onClick={handleEditClick}>Edit</button>
        <button className={css.button} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
