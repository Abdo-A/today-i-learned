import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allDailies: [],
  publicDailies: [],
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_DAILY_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.CREATE_DAILY_END:
      return {
        ...state,
        isLoading: false
      };

    case actionTypes.GET_ALL_DAILIES_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_ALL_DAILIES_END:
      return {
        ...state,
        allDailies: action.payload ? action.payload : state.allDailies,
        isLoading: false
      };

    case actionTypes.GET_PUBLIC_DAILIES_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_PUBLIC_DAILIES_END:
      return {
        ...state,
        publicDailies: action.payload ? action.payload : state.publicDailies,
        isLoading: false
      };


    default:
      return state;
  }
};
