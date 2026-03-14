import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>🌤️ Weather App</h1>
    <p className={styles.subtitle}>Enter a city to get current weather</p>
  </header>
);

export default Header;
