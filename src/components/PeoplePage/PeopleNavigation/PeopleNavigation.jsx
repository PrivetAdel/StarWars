import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, currentPage, prevPage, nextPage }) => {
  const handleChangePrev = () => getResource(prevPage);
  const handleChangeNext = () => getResource(nextPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${currentPage-1}`} className={styles.link}>
        <button
          onClick={handleChangePrev}
          disabled={!prevPage}
          className={styles.button}>
          Prev
        </button>
      </Link>

      <Link to={`/people/?page=${currentPage+1}`} className={styles.link}>
        <button
          onClick={handleChangeNext}
          disabled={!nextPage}
          className={styles.button}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
