import React, {useEffect, useState} from 'react';
import {API_PEOPLE} from '../../constants/api';
import {getApiResource, changeHTTP} from '../../utils/network';
import {getPeopleId, getPeopleImage, getPeoplePageId} from '../../services/getPeopleData';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import {useQueryParams} from '../../hooks/useQueryParams';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';
import styles from './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {
  const [people, setPople] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
  
        return {id, name, img};
      });

      setPople(peopleList);
      setCurrentPage(getPeoplePageId(url));
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE+queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation 
        getResource={getResource}
        currentPage={currentPage} 
        prevPage={prevPage} 
        nextPage={nextPage} />
      {
        people && <PeopleList people={people} />
      }
    </>
  )
}

export default withErrorApi(PeoplePage);
