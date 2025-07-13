import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ isOpen, onClose, type = 'success', message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={`${styles.modalHeader} ${styles[type]}`}>
          {type === 'success' ? '✓' : '✕'}
        </div>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.modalButton}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;