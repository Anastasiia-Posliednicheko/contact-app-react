import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact} from "./operations";
import { selectNameFilter} from "../filters/selectors";



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state =>{
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state,action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(addContact.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(deleteContact.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter(contact => contact.id !== action.payload.id);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateContact.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      state.loading = false;
      const idx = state.items.findIndex(c => c.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
    })
    .addCase(updateContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
 });

 export const selectContacts = state => state.contacts.items;
 export const selectLoading = state => state.contacts.loading;
 export const selectError = state => state.contacts.error;

 export const selectFilteredContacts  = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => 
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
 );
 export default contactsSlice.reducer;
  
 