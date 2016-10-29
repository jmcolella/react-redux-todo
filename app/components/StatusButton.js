import React from 'react';
import { dispatch } from 'redux';
import { toggleTodo, deleteTodo } from '../actions/todo_actions';

const StatusButton = ( { store, todo, deleteT, children } ) => {
  let statusButton;

  if ( deleteT ) {
    statusButton =
      <button
        onClick={
          () => store.dispatch( deleteTodo( todo ) )
        }
      >
        { children }
      </button>
  } else {
    statusButton =
      <button
        onClick={
          () => store.dispatch( toggleTodo( todo ) )
        }
      >
        { children }
      </button>
  }
  return (
    <div>
      { statusButton }
    </div>
  )
};

export default StatusButton;