import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ onSearch, loading, error }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g., Vijayawada, London"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        className={styles.input}
      />
      <button type="submit" disabled={loading} className={styles.btn}>
        {loading ? '🔄' : 'Search'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default Search;
