import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  items: [
    {
      id: 1,
      text: 'Test text',
      created: Date.now(),
      isDone: false,
    },
  ],
};

const items = (state = initialState.items, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return [...state, payload];

    case types.DELETE_TODO:
      return state.filter(({ id }) => id !== payload);

    case types.TOGGLE_TODO:
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
});
