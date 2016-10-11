import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/todo_actions';

const todo = ( state, action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return state.concat( todo( undefined, action ) );
    default:
      return state
  }
}

export const todoApp = combineReducers({
  todos: todos
});

