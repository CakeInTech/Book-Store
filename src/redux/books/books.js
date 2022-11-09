import { createAsyncThunk } from '@reduxjs/toolkit';

// API
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xaZvtxHiDsxHqbPdmxpT/books';

// Action Type
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

// POST
export const addNewBook = createAsyncThunk(ADD_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  dispatch(addBook(payload));
}));

export const fetchBooks = createAsyncThunk(FETCH_BOOK, (action) => {
  const dispatch = action;
  fetch(baseURL).then((response) => response.json()).then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOK,
      payload: books,
    });
  });
});

export const removeBooks = createAsyncThunk(REMOVE_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(`${baseURL}/${payload.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeBook(payload));
})());

// Book Reducer
const booksReducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];
    case REMOVE_BOOK: return [
      ...state.filter((each) => each.item_id !== action.payload.item_id),
    ];
    case FETCH_BOOK:
      return [
        ...state,
        ...action.payload,
      ];
    default: return state;
  }
};

export default booksReducer;
