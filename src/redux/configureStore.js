import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categoreis/categories';
import booksReducer from './books/books';

const rootReducer = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
}, applyMiddleware(thunk));
export default rootReducer;
