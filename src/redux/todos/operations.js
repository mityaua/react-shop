import axios from 'axios';
import { toast } from 'react-toastify';

import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:8888';

export const getTodos = () => (dispatch, getState) => {
  dispatch(actions.fetchTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(actions.fetchTodosSuccess(data)))
    .catch(error => {
      dispatch(actions.fetchTodosError(error.message));
      toast.error(error.message);
    });
};

export const addTodo = payload => (dispatch, getState) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('/todos', payload)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch(error => {
      dispatch(actions.addTodoError(error.message));
      toast.error(error.message);
    });
};

export const deleteTodo = id => (dispatch, getState) => {
  dispatch(actions.deleteTodoRequest());

  axios
    .delete(`todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(error => {
      dispatch(actions.deleteTodoError(error.message));
      toast.error(error.message);
    });
};

export const toggleTodo = todo => (dispatch, getState) => {
  dispatch(actions.toggleTodoRequest());

  axios
    .patch(`/todos/${todo.id}`, todo)
    .then(() => dispatch(actions.toggleTodoSuccess(todo.id)))
    .catch(error => {
      dispatch(actions.toggleTodoError(error.message));
      toast.error(error.message);
    });
};
