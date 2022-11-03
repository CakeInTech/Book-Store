import React from 'react';
import styles from './Addbook.module.css';

function Addbook() {
  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Title of the book" className={styles.input} />
        <input type="text" placeholder="author name" className={styles.input} />
        <input type="text" placeholder="category" className={styles.input} />
        <button type="button" value="Add" label="Add" className={styles.addBtn}>Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
