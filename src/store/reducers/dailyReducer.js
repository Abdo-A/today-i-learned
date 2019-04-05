import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {

  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MANIPULATE_DAILY_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.MANIPULATE_DAILY_END:
      return {
        ...state,
        isLoading: false
      };


    default:
      return state;
  }
};
