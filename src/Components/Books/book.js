import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooks } from '../../redux/books/books';

function book(props) {
  const dispatch = useDispatch();
  const { books } = props;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>{book.title}</span>
          <span />
          <span>{book.author}</span>
          <span />
          <span><button value="remove" type="button" onClick={() => dispatch(removeBooks(book.id))}>Remove Book</button></span>
        </li>
      ))}
    </ul>
  );
}

book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    map: PropTypes.objectOf(PropTypes.string),
  }).isRequired).isRequired,
};

export default book;
