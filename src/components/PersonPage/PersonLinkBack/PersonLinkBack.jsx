import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import iconBack from '../../../assets/icon-back.svg';

const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (evt) => {
    evt.preventDefault();
    history.goBack();
  }
  
  return (
    <a href="/" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="Go back" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
