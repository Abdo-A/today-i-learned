import jwtDecode from 'jwt-decode';

import * as actionTypes from './actionTypes';

import http, {
  userAPI,
  setAuthToken,
  removeAuthToken
} from '../../assets/utils/httpService';

import { storedJWTname } from '../../assets/data/constants';

export const loginUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START
  });

  http
    .post(`${userAPI}/login`, userData)
    .then((res) => {
      const { token } = res.data;

      // Save token to storage
      localStorage.setItem(storedJWTname, token).catch(() => {
        alert('Could not save your credentials');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Set user in auth reducer
      dispatch({
        type: actionTypes.SET_USER,
        payload: decodedToken
      });

      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: actionTypes.UNSET_USER
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START
  });

  // Remove token from storage
  localStorage.removeItem(storedJWTname).catch(() => {
    alert('Could not remove your saved credentials');
  });

  // Remove Authorization header
  removeAuthToken();

  // Remove user from auth reducer
  dispatch({
    type: actionTypes.UNSET_USER
  });
};

export const checkSavedUserThenLogin = (callback) => (dispatch) => {
  localStorage.getItem(storedJWTname).then((token) => {
    if (token) {
      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        dispatch(logoutUser());
      } else {
        // Set user
        dispatch({
          type: actionTypes.SET_USER,
          payload: decodedToken
        });
        if (callback) callback();
      }
    }
  });
};
