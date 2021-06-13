import React from 'react';
import { useDispatch } from 'react-redux';
import { addPersonToFavorite, removePersonFromFavorite } from '../../../redux/actions';
import iconFavorite from '../../../assets/icon-favorite.svg';
import iconFavoriteFill from '../../../assets/icon-favorite-fill.svg';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ 
  personId, 
  personPhoto, 
  personName, 
  personFavorite, 
  setPersonFavorite 
}) => {

  const dispatch = useDispatch();

  const clickFavoriteHandler = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(addPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }));
      setPersonFavorite(true);
    }
  }

  return (
    <div className={styles.container}>
      <img 
        className={styles.photo} 
        src={personPhoto} 
        alt={personName} />

      <img 
        onClick={clickFavoriteHandler}
        className={styles.favorite}
        src={personFavorite ? iconFavoriteFill : iconFavorite}
        alt="Add to favorite"/>
    </div>
  );
};

export default PersonPhoto;
