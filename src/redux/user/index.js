import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '',
  token: '',
  isLoggedOn: false,
  isLoading: false,
  isAuthorizing: true,
  error: '',
};

// Вариант через Слайсы
const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginRequest: state => {
      state.isLoading = true;
    },
    onLoginSuccess: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedOn = true;
      state.isLoading = false;
    },
    onLoginFailure: (state, action) => {
      state.error = action.payload;
      state.isLoggedOn = false;
      state.isLoading = false;
    },

    onLogOutRequest: state => {
      state.isLoading = true;
    },
    onLogOutSuccess: state => {
      state.token = '';
      state.email = '';
      state.name = '';
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    onLogOutFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    onGetUserRequest: state => {
      state.isAuthorizing = true;
    },
    onGetUserSuccess: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedOn = true;
      state.isAuthorizing = false;
    },
    onGetUserFailure: state => {
      state.token = '';
      state.isLoggedOn = false;
      state.isAuthorizing = false;
    },
    onGetUserCancel: state => {
      state.isAuthorizing = false;
    },
  },
});

export const {
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
} = actions;

export default reducer;
