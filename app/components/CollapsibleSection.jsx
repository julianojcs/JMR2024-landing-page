'use client';

import { useState } from 'react';
import styles from './CollapsibleSection.module.css';

export default function CollapsibleSection({
  title,
  children,
  collapsed,
  onToggle,
  variant = 'default',
  className = ''
}) {
  return (
    <div className={`${styles.collapsibleSection} ${styles[variant]} ${className}`}>
      <div
        className={styles.sectionHeader}
        onClick={onToggle}
      >
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>
        <span className={`${styles.collapseIcon} ${collapsed ? styles.collapsed : ''}`}>
          ▼
        </span>
      </div>
      <div className={`${styles.sectionContent} ${collapsed ? styles.collapsed : ''}`}>
        {children}
      </div>
    </div>
  );
}
