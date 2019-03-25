import * as actionTypes from './actionTypes';

export const clearErrors = () => ({
  type: actionTypes.CLEAR_ERRORS
});

export const clearOneError = (errorName) => ({
  type: actionTypes.CLEAR_ONE_ERROR,
  payload: errorName
});
