import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, EDITING_TODO, CHANGE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER } from '../actions/todo_actions';

const todo = ( state, action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        editing: false,
        completed: false
      }
    case TOGGLE_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case EDITING_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        editing: true
      })
    case CHANGE_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        text: action.text
      })
    case EDIT_TODO:
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        editing: false,
        text: action.text
      })
    default:
      return state
  }
}

const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return state.concat( todo( undefined, action ) );
    case TOGGLE_TODO:
      return state.map( t => todo( t, action ) )
    case EDITING_TODO:
      return state.map( t => todo( t, action ) )
    case CHANGE_TODO:
      return state.map( t => todo( t, action ) )
    case EDIT_TODO:
      return state.map( t => todo( t, action ) )
    default:
      return state
  }
}

const visibilityFilter = ( state = "SHOW_ALL", action ) => {
  switch ( action.type ) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


export const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

