import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants';

export const addPersonToFavorite = (person) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person
});

export const removePersonFromFavorite = (personId) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId
});
