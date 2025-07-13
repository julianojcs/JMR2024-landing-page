import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <span className={styles.loadingText}>Carregando...</span>
    </div>
  );
};

export default LoadingSpinner;