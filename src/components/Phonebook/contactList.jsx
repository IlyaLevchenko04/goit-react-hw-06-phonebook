import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  const getVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {getVisibleContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {`${name}: ${number}`}
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
