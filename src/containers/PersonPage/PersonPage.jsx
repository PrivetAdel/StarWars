import React, {useState, useEffect, Suspense} from 'react';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import {getApiResource} from '../../utils/network';
import {getPeopleImage} from '../../services/getPeopleData';
import {API_PERSON} from '../../constants/api';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonFilms from '../../components/PersonPage/PersonFilms';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import Spinner from '../../components/Spinner';
import styles from './PersonPage.module.css';

const PersonPage = ({match, setErrorApi}) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if(res) {
        setPersonInfo([
          {title: 'Height', data: res.height},
          {title: 'Mass', data: res.mass},
          {title: 'Hair Color', data: res.hair_color},
          {title: 'Skin Color', data: res.skin_color},
          {title: 'Eye Color', data: res.eye_color},
          {title: 'Birth Year', data: res.birth_year},
          {title: 'Gender', data: res.gender},
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName} />
          {
            personInfo && <PersonInfo personInfo={personInfo} />
          }

          {
            personFilms && (
              <Suspense fallback={<Spinner />}>
                <PersonFilms personFilms={personFilms} />
              </Suspense>
            )
          }
        </div>
      </div>
    </>
  )
}

export default withErrorApi(PersonPage);
