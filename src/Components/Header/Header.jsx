import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Bookstore CMS</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navul}>
          <Link to="/"><li className={styles.page}>Books</li></Link>
          <Link to="/categories"><li className={styles.page}>Categories</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
