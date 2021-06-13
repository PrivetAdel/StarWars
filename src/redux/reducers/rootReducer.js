import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants';
import { getLocalStorage } from '../../utils/localStorage';

const initialState = getLocalStorage('store');

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };

    case REMOVE_PERSON_FROM_FAVORITE:
      const newState = (id) => {
        const copyState = JSON.parse(JSON.stringify(state))
        delete copyState[id]

        return copyState
      }

      return newState(action.payload);

    default:
      return state;
  }
};

export default rootReducer;
