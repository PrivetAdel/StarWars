import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import PersonPage from '../PersonPage';
import SearchPage from '../SearchPage';
import NotFoundPage from '../NotFoundPage';
import FavoritesPage from '../FavoritesPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/people" exact component={PeoplePage} />
        <Route path="/people/:id" exact component={PersonPage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/not-found" exact component={NotFoundPage} />
        <Route path="/favorites" exact component={FavoritesPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
