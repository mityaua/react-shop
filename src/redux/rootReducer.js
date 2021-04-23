import { combineReducers } from 'redux';
import counter from './counter/reducer';
import counterToolkit from './counter-toolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice';
import todos from './todos/reducer';

export default combineReducers({
  counter,
  counterToolkit,
  counterToolkitSlice,
  todos,
});
