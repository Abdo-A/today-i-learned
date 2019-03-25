import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };

    case actionTypes.UNSET_USER:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
};
