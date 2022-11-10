/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'xaZvtxHiDsxHqbPdmxpT';

export const fetchBooks = createAsyncThunk('FETCH_BOOK', async () => {
  try {
    const response = axios.get(`${baseURL}/apps/${apiKey}/books`);
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewBook = createAsyncThunk('ADD_BOOK', async (book) => {
  try {
    const { data } = axios.post(`${baseURL}/apps/${apiKey}/books`, book);
    return data;
  } catch (error) {
    return error;
  }
});

export const removeBooks = createAsyncThunk('REMOVE_BOOK', async (id) => {
  try {
    const response = axios.delete(`${baseURL}/apps/${apiKey}/books/${id}`);
    return response;
  } catch (error) {
    return error;
  }
});

const initialState = {
  books: [],
  loading: 'idle',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      let data = [];
      if (action.payload.data === '') {
        data = [];
      } else {
        const books = Object.keys(action.payload.data).map((key) => {
          const book = action.payload.data[key][0];
          return {
            id: key,
            ...book,
          };
        });
        data = books;
      }

      state.books = data;
    });

    builder.addCase(addNewBook.fulfilled, (state, action) => {
      const newBook = {
        id: action.meta.arg.item_id,
        title: action.meta.arg.title,
        author: action.meta.arg.author,
      };
      state.books.push(newBook);
      state.loading = 'success';
    });

    builder.addCase(removeBooks.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.meta.arg);
    });
  },
});

export default booksSlice.reducer;
