import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactActions,
  deleteContactsActions,
  filterContactsActions,
} from './contactsActions';

const items = createReducer([], {
  [addContactActions]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactsActions]: (state, { payload }) => {
    return [...state].filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [filterContactsActions]: (_state, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
});
