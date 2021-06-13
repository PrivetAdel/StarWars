import React from 'react';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../../context/ThemeProvider';
import imgLightSide from '../../../assets/light-side.jpg';
import imgDarkSide from '../../../assets/dark-side.jpg';
import imgFalcon from '../../../assets/falcon.jpg';
import classnames from 'classnames';
import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ classes, theme, text, img}) => {
  const isTheme = useTheme();

  return (
    <div 
      className={classnames(styles.item, classes)}
      onClick={() => isTheme.change(theme)} >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: styles.item__light
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: styles.item__dark
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item__neutral
    },
  ]
  return (
    <div className={styles.container}>
      {
        elements.map(({theme, text, img, classes}, index) => (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes} />
        ))
      }
    </div>
  );
};

export default ChooseSide;
