import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handlerSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    e.target.reset();
  };

  const handlerChange = evt => {
    if (evt.currentTarget.name === 'name') {
      setName(evt.currentTarget.value);
    }

    if (evt.currentTarget.name === 'number') {
      setNumber(evt.currentTarget.value);
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>Name</label>
      <input
        onChange={handlerChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone number</label>
      <input
        onChange={handlerChange}
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
