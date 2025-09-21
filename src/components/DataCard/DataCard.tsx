import React from 'react';
import styles from './DataCard.module.css';

interface DataCardProps {
  title: string;
  children: React.ReactNode; 
}

export function DataCard({ title, children }: DataCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}