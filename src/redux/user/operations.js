import axios from 'axios';
import { toast } from 'react-toastify';
import {
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,
  onLogOutRequest,
  onLogOutSuccess,
  onLogOutFailure,
} from './index';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest());

  axios
    .post('/login', payload)
    .then(({ data }) => dispatch(onLoginSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = payload => (dispatch, getState) => {
  dispatch(onLogOutRequest());

  axios
    .post('/logout', payload)
    .then(() => dispatch(onLogOutSuccess()))
    .catch(error => {
      toast.error(error.message);
      dispatch(onLogOutFailure(error.message));
    });
};
