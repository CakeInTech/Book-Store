import { useSelector, useDispatch } from 'react-redux';
// Action Creator
import { removeBooks } from '../../redux/books/books';
import styles from './Books.module.css';
import Addbook from '../Addbook/Addbook';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const removeBookHandler = (object) => {
    dispatch(removeBooks({
      payload: object,
      dispatch,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books.map(({
            item_id: itemId,
            title,
            author,
          }) => (
            <li className={styles.listItem} key={itemId}>
              <span>{title}</span>
              <span />
              <span>{author}</span>
              <span />
              <span>
                <button
                  value="remove"
                  type="button"
                  onClick={() => { removeBookHandler({ item_id: itemId }); }}
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

// Unique identifier for the app : xaZvtxHiDsxHqbPdmxpT
