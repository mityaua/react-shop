import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counter from './counter/reducer';
import counterToolkit from './counter-toolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice';
import todos from './todos/reducer';

const persistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(persistConfig, todos);

export default combineReducers({
  counter,
  counterToolkit,
  counterToolkitSlice,
  todos: todosReducer,
});
