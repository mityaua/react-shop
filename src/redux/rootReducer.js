import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counter from './counter/reducer';
import counterToolkit from './counter-toolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice';
import todos from './todos/reducer';
import user from './user';

const todosPersistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(todosPersistConfig, todos);

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const tokenReducer = persistReducer(tokenPersistConfig, user);

export default combineReducers({
  counter,
  counterToolkit,
  counterToolkitSlice,
  todos: todosReducer,
  user: tokenReducer,
});
