export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let todoId = 0;
export function addTodo ( text ) {
  return {
    type: ADD_TODO,
    id: todoId++,
    text
  }
};

export function toggleTodo ( todo ) {
  return {
    type: TOGGLE_TODO,
    id: todo.id
  }
}

export function setVisibilityFilter ( filter ) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}