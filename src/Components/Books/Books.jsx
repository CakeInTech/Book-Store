import { useSelector, useDispatch } from 'react-redux';
// Action Creator
import { removeBook } from '../../redux/books/books';
import styles from './Books.module.css';
import Addbook from '../Addbook/Addbook';
import Book from './Book';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  const removeBookHandler = (object) => {
    dispatch(removeBook(object));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books && books.map((book) => (
            <Book
              key={book.id}
              book={book}
              onClick={removeBookHandler(book)}
            />
          ))}
        </ul>
      </div>
      <Addbook />
    </div>
  );
}

export default Books;
