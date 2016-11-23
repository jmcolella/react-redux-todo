import * as constants from '../constants/todo_constants';

export const todo = ( state, action ) => {
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
