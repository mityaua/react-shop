import axios from 'axios';
import { toast } from 'react-toastify';
import {
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,
  onLogOutRequest,
  onLogOutSuccess,
  onLogOutFailure,
  onGetUserRequest,
  onGetUserSuccess,
  onGetUserFailure,
  onGetUserCancel,
} from './index';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest());

  axios
    .post('/login', payload)
    .then(({ data }) => {
      setToken(data.token);
      dispatch(onLoginSuccess(data));
    })
    .catch(error => {
      toast.error(error.message);
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch(onLogOutRequest());

  axios
    .post('/logout')
    .then(() => dispatch(onLogOutSuccess()))
    .catch(error => {
      toast.error(error.message);
      dispatch(onLogOutFailure(error.message));
    });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();

  const { token } = state.user;

  if (!token) {
    dispatch(onGetUserCancel());
    return;
  }

  dispatch(onGetUserRequest());
  setToken(token);

  axios
    .get('/current')
    .then(({ data }) => dispatch(onGetUserSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      setToken('');
      dispatch(onGetUserFailure(error.message));
    });
};
