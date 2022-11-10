import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import AddBook from '../Addbook/Addbook';
import Books from './book';
import styles from './Books.module.css';
import { fetchBooks } from '../../redux/books/books';

const BookLists = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.list}>
        <Books books={books} />
      </section>
      <section>
        <AddBook />
      </section>
    </div>
  );
};

export default BookLists;

// Unique identifier for the app : xaZvtxHiDsxHqbPdmxpT
