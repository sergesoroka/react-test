import React from 'react';
import styles from './Alert.module.css';

export default function Alert({ text, type }) {
  return (
    <small
      className={
        type === 'success' ? styles.alert__success : styles.alert__error
      }
      role='alert'
    >
      {text}
    </small>
  );
}
