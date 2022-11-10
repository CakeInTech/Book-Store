import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
// Action creator
import { addNewBook } from '../../redux/books/books';
import styles from './Addbook.module.css';

function Addbook() {
  const dispatch = useDispatch();
  const addBookHandler = (added) => {
    added.preventDefault();
    dispatch(addNewBook({
      item_id: uuidv4(),
      title: added.target.title.value,
      author: added.target.author.value,
      category: 'Horror',
    }));
    added.target.reset();
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form
        className={styles.formContainer}
        onSubmit={addBookHandler}
      >
        <input
          id="title"
          type="text"
          placeholder="Title of the book"
          className={styles.input}
        />
        <input
          id="author"
          type="text"
          placeholder="author name"
          className={styles.input}
        />
        <button
          type="submit"
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
