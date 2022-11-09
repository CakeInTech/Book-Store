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
