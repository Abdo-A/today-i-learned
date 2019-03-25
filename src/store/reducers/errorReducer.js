import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return action.payload;

    case actionTypes.CLEAR_ERRORS:
      return {};

    case actionTypes.CLEAR_ONE_ERROR: {
      const newState = { ...state };
      newState[action.payload] = '';
      return newState;
    }

    default:
      return state;
  }
};
