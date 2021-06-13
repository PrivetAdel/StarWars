import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../context/ThemeProvider';
import Favorite from '../FavoritesPage/Favorite';
import imgDroid from '../../assets/icon-droid.svg';
import imgLightsaber from '../../assets/icon-lightsaber.svg';
import imgSpaceStation from '../../assets/icon-space-station.svg';
import styles from './Header.module.css';

const Header = () => {
  const [icon, setIcon] = useState(imgDroid);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(imgLightsaber); break;
      case THEME_DARK: setIcon(imgSpaceStation); break;
      case THEME_NEUTRAL: setIcon(imgDroid); break;
      default: setIcon(imgDroid);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

      <ul className={styles.list__container}>
        <li><NavLink to="/" exact >Home</NavLink></li>
        <li><NavLink to="/people/?page=1" >People</NavLink></li>
        <li><NavLink to="/search" >Search</NavLink></li>
        <li><NavLink to="/not-found" exact >Not Found</NavLink></li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
