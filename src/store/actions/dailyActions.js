import * as actionTypes from './actionTypes';

import http, {
  dailyAPI,
} from '../../assets/utils/httpService';


export const createDaily = (dailyData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MANIPULATE_DAILY_START,
  });
  http
    .post(dailyAPI, dailyData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.MANIPULATE_DAILY_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MANIPULATE_DAILY_END,
      });
    });
};