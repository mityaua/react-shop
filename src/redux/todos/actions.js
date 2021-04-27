import { createAction } from '@reduxjs/toolkit';

import types from './types';

export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
export const toggleTodo = createAction(types.TOGGLE_TODO);

export const fetchTodosRequest = createAction(types.FETCH_TODOS_REQUEST);
export const fetchTodosSuccess = createAction(types.FETCH_TODOS_SUCCESS);
export const fetchTodosError = createAction(types.FETCH_TODOS_ERROR);

export const addTodoRequest = createAction(types.ADD_TODO_REQUEST);
export const addTodoSuccess = createAction(types.ADD_TODO_SUCCESS);
export const addTodoError = createAction(types.ADD_TODO_ERROR);

export const deleteTodoRequest = createAction(types.DELETE_TODO_REQUEST);
export const deleteTodoSuccess = createAction(types.DELETE_TODO_SUCCESS);
export const deleteTodoError = createAction(types.DELETE_TODO_ERROR);

export const toggleTodoRequest = createAction(types.TOGGLE_TODO_REQUEST);
export const toggleTodoSuccess = createAction(types.TOGGLE_TODO_SUCCESS);
export const toggleTodoError = createAction(types.TOGGLE_TODO_ERROR);
