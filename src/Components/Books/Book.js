import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Book({ title, author, removeBookHandler }) {
  return (
    <>
      <li>
        <h2>{title}</h2>
        <p>{author}</p>
      </li>
      <button
        type="button"
        onClick={() => {
          removeBookHandler();
        }}
      >
        Delete
      </button>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
