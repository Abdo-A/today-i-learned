import { combineReducers } from 'redux';

import authReducer from './authReducer';
import dailyReducer from './dailyReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  daily: dailyReducer
});
