import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const isInContacts = state.some(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isInContacts) {
        alert('Person already in contacts');
        return;
      }
      return [
        ...state,
        {
          name: action.payload.name,
          number: action.payload.number,
          id: nanoid(),
        },
      ];
    },

    deleteContact(state, action) {
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { addContact, deleteContact, getFilteredContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
