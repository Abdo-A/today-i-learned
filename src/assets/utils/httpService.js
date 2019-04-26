import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};

export default http;

export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = token;
  }
};

export const removeAuthToken = () => {
  // Delete auth header
  delete axios.defaults.headers.common.Authorization;
};

export const serverPath = 'http://46.101.170.117/todayilearned';
export const userAPI = `${serverPath}/api/user`;
export const dailyAPI = `${serverPath}/api/daily`;
