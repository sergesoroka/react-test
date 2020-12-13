import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {pageNumbers.map(number => (
        <span
          key={number}
          className={styles.pagination__item}
          onClick={() => paginate(number)}
        >
          {number}
        </span>
      ))}
    </nav>
  );
};

export default Pagination;
