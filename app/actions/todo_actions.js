export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDITING_TODO = 'EDITING_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
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

export function editingTodo ( todo ) {
  return {
    type: EDITING_TODO,
    id: todo.id
  }
}

export function changeTodo ( todo, input ) {
  return {
    type: CHANGE_TODO,
    id: todo.id,
    text: input
  }
}

export function editTodo ( todo, text ) {
  return {
    type: EDIT_TODO,
    id: todo.id,
    text: text
  }
}

export function setVisibilityFilter ( filter ) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}