import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteIdContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addNewContact, deleteIdContact, filterContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
