import {createSelector } from "@reduxjs/toolkit";
import { selectNameFilter} from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoadig = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      number.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
