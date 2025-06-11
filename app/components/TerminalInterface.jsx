'use client';

import styles from './TerminalInterface.module.css';

export default function TerminalInterface({
  title = "Coupon Validator",
  children,
  className = ''
}) {
  return (
    <div className={`${styles.terminal} ${className}`}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <div className={`${styles.terminalDot} ${styles.red}`}></div>
          <div className={`${styles.terminalDot} ${styles.yellow}`}></div>
          <div className={`${styles.terminalDot} ${styles.green}`}></div>
        </div>
        <div className={styles.terminalTitle}>{title}</div>
      </div>
      <div className={styles.terminalBody}>
        {children}
      </div>
    </div>
  );
}
