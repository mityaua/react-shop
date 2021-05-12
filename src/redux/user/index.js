import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '',
  token: '',
  isLoggedOn: false,
  isLoading: false,
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
    onLogOutSuccess: (state, action) => {
      state = initialState;
      state.isLoading = false;
    },
    onLogOutFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    onGetUser: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.isLoggedOn = true;
      state.isLoading = false;
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
  onGetUser,
} = actions;

export default reducer;
