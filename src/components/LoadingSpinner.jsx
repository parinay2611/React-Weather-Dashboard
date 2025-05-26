// src/components/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css'; // optional styling

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  );
};

export default LoadingSpinner;
