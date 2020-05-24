import Axios from 'axios';
import history from '../history';

const BASE_URL = '//localhost:3000/';

const axios = Axios.create({
  withCredentials: true,
});

export default {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  },
};


async function ajax(endpoint, method = 'get', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
    });
    return res.data;
  } catch (err) {
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
    console.dir(err);
    if (err.response && err.response.status === 401) {
      history.push('/login');
    }
    throw err;
  }
}