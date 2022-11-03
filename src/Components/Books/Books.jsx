import React, { useState } from 'react';
import styles from './Books.module.css';
import Addbook from '../Addbook/Addbook';

function Books() {
  const [Books, setBooks] = useState({
    id: 1,
    title: 'The book of dungeons',
    author: 'Harry Potter',
  });

  const getBooks = () => {
    setBooks({ id: 1, title: 'The book of dungeons', author: 'Harry Pottter' });
  };
  console.log(getBooks);

  const { id, title, author } = Books;

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          <li>
            {id}
            ,
            {' '}
            {title}
            ,
            {' '}
            {author}
          </li>
        </ul>
      </div>
      <Addbook />
    </div>
  );
}

export default Books;
