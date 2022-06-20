import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';

import contactsReduser from './contacts/contactsRedusers';
import { contactsPersistConfig } from './contacts/contactsPersistConfig';

import { middleware } from './contacts/contactsMiddleware';

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReduser),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
