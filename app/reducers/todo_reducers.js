import { combineReducers } from 'redux';
import * as constants from '../constants/todo_constants';

const todo = ( state, action ) => {
  switch ( action.type ) {
    case constants.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        editing: false,
        completed: false
      }
    case constants.TOGGLE_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case constants.EDITING_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        editing: true
      })
    case constants.CHANGE_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        text: action.text
      })
    case constants.EDIT_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        editing: false,
        text: action.text
      })
    case constants.DELETE_TODO:
      return state.id !== action.id
    default:
      return state
  }
}

const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case constants.ADD_TODO:
      return state.concat( todo( undefined, action ) );
    case constants.TOGGLE_TODO:
    case constants.EDITING_TODO:
    case constants.CHANGE_TODO:
    case constants.EDIT_TODO:
      return state.map( t => todo( t, action ) )
    case constants.DELETE_TODO:
      return state.filter( t => todo( t, action ) )
    default:
      return state
  }
}

const visibilityFilter = ( state = "SHOW_ALL", action ) => {
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

