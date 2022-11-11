import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Categories.module.css';

function Categories() {
  const [status, setStatus] = useState(false);
  const [categories] = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    setStatus((prevState) => !prevState);
    dispatch({ type: '' });
  };
  return (
    <div className={styles.CategoriesContainer}>
      { status ? <p className="Alert">{categories.text}</p> : null }
      <button
        type="button"
        onClick={checkStatusHandler}
        className={styles.category}
      >
        Check Status

      </button>
    </div>
  );
}

export default Categories;
