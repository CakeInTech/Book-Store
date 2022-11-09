import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Action creator
import { addNewBook } from '../../redux/books/books';
import styles from './Addbook.module.css';

function Addbook() {
  const dispatch = useDispatch();

  const [bookObj, setBookObj] = useState({
    item_id: null,
    title: null,
    author: null,
  });

  const authorRef = useRef(bookObj);
  const titleRef = useRef(bookObj);

  const addBookHandler = (added) => {
    added.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const itemId = uuidv4();
    setBookObj((previusState) => ({
      ...previusState,
      title,
      author,
      item_id: itemId,
    }));
  };

  const dispatcher = async (e) => {
    e.preventDefault();
    dispatch(addNewBook(bookObj, dispatch));
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form
        className={styles.formContainer}
        onSubmit={() => { addBookHandler(); }}
        onChange={dispatcher}
      >
        <input
          type="text"
          placeholder="Title of the book"
          className={styles.input}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="author name"
          className={styles.input}
          ref={authorRef}
        />
        <input
          type="text"
          placeholder="category"
          className={styles.input}
        />
        <button
          type="button"
          value="Add"
          label="Add"
          className={styles.addBtn}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Addbook;
