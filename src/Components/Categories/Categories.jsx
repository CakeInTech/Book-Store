import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Categories() {
  const [status, setStatus] = useState(false);
  const [categories] = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    setStatus((prevState) => !prevState);
    dispatch({ type: '' });
  };
  return (
    <div>
      <button
        type="button"
        onClick={checkStatusHandler}
      >
        Check Status

      </button>
      { status ? <p className="Alert">{categories.text}</p> : null }
    </div>
  );
}

export default Categories;
