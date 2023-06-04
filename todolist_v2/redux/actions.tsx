import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO } from "./actionTypes";
import StorageService from '../services/StorageService';

let nextTodoId = 0;

export const addTodo = task => {
  return ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task
  }
})
};

export const deleteTodo = id => {
  return ({
  type: DELETE_TODO,
  payload: {
    id
  }
})};

export const editTodo = ( id, task ) => {
  return ({
  type: EDIT_TODO,
  payload: {
    id,
    task
  }
})};

export const appStart = () => {
  const array = StorageService.getList();
  return ({
        type: GET_TODO,
        payload: array
      });
  };

