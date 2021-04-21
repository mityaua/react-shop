import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  value: 10,
  step: 1,
};

const valueReducer = (state = initialState.value, { type, payload = 1 }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload;

    case types.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
