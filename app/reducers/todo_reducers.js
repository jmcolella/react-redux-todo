import { combineReducers } from 'redux';
import * as constants from '../constants/todo_constants';
import * as Helpers from '../utils/todo_helpers';

export const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case constants.ADD_TODO:
      return state.concat( Helpers.todo( undefined, action ) );
    case constants.TOGGLE_TODO:
    case constants.EDITING_TODO:
    case constants.CHANGE_TODO:
    case constants.EDIT_TODO:
      return state.map( t => Helpers.todo( t, action ) )
    case constants.DELETE_TODO:
      return state.filter( t => Helpers.todo( t, action ) )
    default:
      return state
  }
}

export const visibilityFilter = ( state = "SHOW_ALL", action ) => {
  switch ( action.type ) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


export const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
