import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categoreis/categories';
import booksReducer from './books/books';

const rootReducer = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ['FETCH_BOOK', 'ADD_BOOK', 'REMOVE_BOOK'],
    },
  }),
}, applyMiddleware(thunk));
export default rootReducer;
