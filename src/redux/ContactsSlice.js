import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(newContact) {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
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
