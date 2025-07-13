'use client'

import { useState } from 'react'
import styles from './Badge.module.css'

export default function Badge({
  count,
  backgroundColor,
  size = '1.2rem'
}) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    '--badge-size': size,
    '--badge-background': backgroundColor,
  };

  return (
    <div
      className={`${styles.badge}`}
      style={style}
    >
      <span className={styles.badgeContent}>
        <span className={styles.badgeCount}>{count}</span>
      </span>
    </div>
  );
}