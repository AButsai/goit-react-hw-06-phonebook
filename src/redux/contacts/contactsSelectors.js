import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filterContact = createSelector(
  getAllContacts,
  getFilter,
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
