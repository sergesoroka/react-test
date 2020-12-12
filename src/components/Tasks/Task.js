import React from 'react';
import styles from './Task.module.css';

export default function Task({ task }) {
  return (
    <div className={styles.taskContainer}>
      <span>{task.username}</span>
      <span>{task.email}</span>
      <span>{task.text}</span>
      <span>{task.status}</span>
    </div>
  );
}
