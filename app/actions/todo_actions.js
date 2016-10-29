import * as constants from '../constants/todo_constants';

let todoId = 0;
export function addTodo ( text ) {
  return {
    type: constants.ADD_TODO,
    id: todoId++,
    text
  }
};

export function toggleTodo ( todo ) {
  return {
    type: constants.TOGGLE_TODO,
    id: todo.id
  }
}

export function editingTodo ( todo ) {
  return {
    type: constants.EDITING_TODO,
    id: todo.id
  }
}

export function changeTodo ( todo, input ) {
  return {
    type: constants.CHANGE_TODO,
    id: todo.id,
    text: input
  }
}

export function editTodo ( todo, text ) {
  return {
    type: constants.EDIT_TODO,
    id: todo.id,
    text: text
  }
}

export function deleteTodo ( todo ) {
  return {
    type: constants.DELETE_TODO,
    id: todo.id
  }
}

export function setVisibilityFilter ( filter ) {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter: filter
  }
}