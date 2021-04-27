import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const isLoading = (state = initialState.isLoading, { type, payload }) => {
  switch (type) {
    case types.FETCH_TODOS_REQUEST:
    case types.ADD_TODO_REQUEST:
    case types.DELETE_TODO_REQUEST:
    case types.TOGGLE_TODO_REQUEST:
      return true;

    case types.FETCH_TODOS_SUCCESS:
    case types.FETCH_TODOS_ERROR:
    case types.ADD_TODO_SUCCESS:
    case types.ADD_TODO_ERROR:
    case types.DELETE_TODO_SUCCESS:
    case types.DELETE_TODO_ERROR:
    case types.TOGGLE_TODO_ERROR:
    case types.TOGGLE_TODO_SUCCESS:
      return false;

    default:
      return state;
  }
};

const error = (state = initialState.error, { type, payload }) => {
  switch (type) {
    case types.FETCH_TODOS_ERROR:
    case types.ADD_TODO_ERROR:
    case types.DELETE_TODO_ERROR:
    case types.TOGGLE_TODO_ERROR:
      return payload;

    default:
      return state;
  }
};

const items = (state = initialState.items, { type, payload }) => {
  switch (type) {
    case types.FETCH_TODOS_SUCCESS:
      return payload;

    case types.ADD_TODO_SUCCESS:
      return [...state, payload];

    case types.DELETE_TODO_SUCCESS:
      return state.filter(({ id }) => id !== payload);

    case types.TOGGLE_TODO_SUCCESS:
      return state.map(todo =>
        todo.id === payload
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : state,
      );

    default:
      return state;
  }
};

export default combineReducers({
  items,
  isLoading,
  error,
});
