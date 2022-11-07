import { useState } from 'react';
import styles from './Books.module.css';
import Addbook from '../Addbook/Addbook';
import Book from './Book';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([{
    id: 1,
    title: 'The book of dungeons',
    author: 'Harry Potter',
  }]);

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books && books.map((book) => (<Book key={book.id} book={book} />))}
        </ul>
      </div>
      <Addbook />
    </div>
  );
}

export default Books;
