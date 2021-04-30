import React from 'react';
import {useLocation} from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import pic404 from '../../assets/not-found.jpg';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img src={pic404} className={styles.img} alt="Page not found" />
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage;
