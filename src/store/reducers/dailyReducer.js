import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allDailies: [],
  publicDailies: [],
  allDailiesByTag: [],
  publicDailiesByTag: [],
  selectedDaily: {},
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
        allDailies: action.payload ? action.payload : [],
        isLoading: false
      };

    case actionTypes.GET_ALL_DAILIES_BY_TAG_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_ALL_DAILIES_BY_TAG_END:
      return {
        ...state,
        allDailiesByTag: action.payload ? action.payload : [],
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
        publicDailies: action.payload ? action.payload : [],
        isLoading: false
      };

    case actionTypes.GET_PUBLIC_DAILIES_BY_TAG_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_PUBLIC_DAILIES_BY_TAG_END:
      return {
        ...state,
        publicDailiesByTag: action.payload ? action.payload : [],
        isLoading: false
      };

    case actionTypes.GET_DAILY_BY_ID_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_DAILY_BY_ID_END:
      return {
        ...state,
        selectedDaily: action.payload ? action.payload : {},
        isLoading: false
      };

    case actionTypes.DELETE_DAILY_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.DELETE_DAILY_END:
      return {
        ...state,
        isLoading: false
      };

    case actionTypes.ADD_DAILY_COMMENT_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.ADD_DAILY_COMMENT_END:
      return {
        ...state,
        isLoading: false
      };

    case actionTypes.DELETE_DAILY_COMMENT_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.DELETE_DAILY_COMMENT_END:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
