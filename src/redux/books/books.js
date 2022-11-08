// Action Type
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Default State
const initialState = [
  {
    id: 1,
    title: 'The Black Cat',
    author: 'Naruto',
  },
  {
    id: 1,
    title: 'Dark Smasher',
    author: 'Obito',
  },
  {
    id: 1,
    title: 'Zearon of light',
    author: 'Akatski',
  },
  {
    id: 1,
    title: 'Karisma of purple light',
    author: 'Sasuke',
  },
];

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

// Book Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];
    case REMOVE_BOOK: return [
      ...state.filter((each) => each.id !== action.payload.id),
    ];
    default: return state;
  }
};

export default booksReducer;
