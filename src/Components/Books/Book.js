import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Book({ title, author }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
    </li>
  );
}

Book.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
