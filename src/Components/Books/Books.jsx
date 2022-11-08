import { useSelector, useDispatch } from 'react-redux';
// Action Creator
import { removeBook } from '../../redux/books/books';
import styles from './Books.module.css';
import Addbook from '../Addbook/Addbook';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const removeBookHandler = (object) => {
    dispatch(removeBook(object));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books.map((book) => (
            <li className={styles.listItem} key={book.id}>
              <span>{book.title}</span>
              <span />
              <span>{book.author}</span>
              <span />
              <span>
                <button
                  value="remove"
                  type="button"
                  onClick={() => { removeBookHandler(book.id); }}
                >
                  Remove Book
                </button>

              </span>

            </li>
          ))}
        </ul>
      </div>
      <Addbook />
    </div>
  );
}

export default Books;
