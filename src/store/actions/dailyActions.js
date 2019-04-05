import * as actionTypes from './actionTypes';

import http, {
  dailyAPI,
} from '../../assets/utils/httpService';


export const createDaily = (dailyData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE_DAILY_START,
  });
  http
    .post(`${dailyAPI}/new`, dailyData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.CREATE_DAILY_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.CREATE_DAILY_END,
      });
    });
};


export const getAllDailies = callback => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ALL_DAILIES_START,
  });
  http
    .get(`${dailyAPI}/all`)
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.GET_ALL_DAILIES_END,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_ALL_DAILIES_END,
      });
    });
};


export const getPublicDailies = callback => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PUBLIC_DAILIES_START,
  });
  http
    .get(`${dailyAPI}/public`)
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.GET_PUBLIC_DAILIES_END,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_PUBLIC_DAILIES_END,
      });
    });
};


export const getDailyById = (id, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_DAILY_BY_ID_START,
  });

  http
    .get(`${dailyAPI}/${id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_DAILY_BY_ID_END,
        payload: res.data,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_DAILY_BY_ID_END,
      });
    });
};