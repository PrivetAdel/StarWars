import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
  return (
    <ul className={styles.list__container}>
      {
        people.map(({id, name, img}) => (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default PeopleList;
