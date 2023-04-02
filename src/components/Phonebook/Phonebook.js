// import { useEffect } from 'react';
import { ContactForm } from './form';
import { ContactList } from './contactList';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
export function Phonebook() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
}
