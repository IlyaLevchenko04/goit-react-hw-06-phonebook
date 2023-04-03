import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import { getContacts } from 'redux/selectors';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleAddContact = contact => {
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert('Person already in contacts');
      return;
    }

    dispatch(addContact(contact));
  };

  const handlerSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    e.target.reset();
  };

  const handlerChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);

    if (name === 'number') setNumber(value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>Name</label>
      <input
        onChange={handlerChange}
        // value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone number</label>
      <input
        onChange={handlerChange}
        // value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add to contacts</button>
    </form>
  );
};
