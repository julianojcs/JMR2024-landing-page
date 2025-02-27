import React from 'react';
import styles from './LoadingSpinnerInput.module.css';

const LoadingSpinnerInput = ({loadingText="Carregando..."}) => {
  return (
    <div className={styles.loadingContainer} role="status" aria-busy="true">
      <div className={styles.spinner}></div>
      <span className={styles.loadingText}>{loadingText}</span>
    </div>
  );
};

export default LoadingSpinnerInput;