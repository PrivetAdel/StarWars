import React, { useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import icon from '../../assets/icon-close.svg';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [value, setValue] = useState('');
  const [people, setPeople] = useState([]);
  
  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH+param);

    if (res) {
      const peopleList = res.results.map(({name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id, name, img
        }
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  const inputChangeHandler = (evt) => {
    setValue(evt.target.value);
    getResponse(evt.target.value);
  }

  const clearHandler = () => {
    if (value) {
      setValue('');
      setPeople([]);
    }
  }

  return (
    <>
      <h1 className="header__text">Search</h1>

    <div className={styles.input__wrapper}>
      <input 
          type="text"
          value={value}
          onChange={inputChangeHandler}
          placeholder="Input characters's name"
          className={styles.input__search}
        />

      <img
        src={icon}
        className={styles.clear}
        onClick={clearHandler}
        alt="Clear" />
    </div>

      <SearchPageInfo people={people} />
    </>
  )
}

export default withErrorApi(SearchPage);
