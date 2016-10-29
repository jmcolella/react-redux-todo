import React from 'react';
import { dispatch } from 'redux';
import { toggleTodo } from '../actions/todo_actions';

const StatusButton = ( { store, todo } ) => {
  let statusButton;

  if ( todo.completed ) {
    statusButton =
      <button
        onClick={
          () => store.dispatch( toggleTodo( todo ) )
        }
      >
        Undo
      </button>
  } else {
    statusButton =
      <button
        onClick={
          () => store.dispatch( toggleTodo( todo ) )
        }
      >
        Complete
      </button>
  }
  return (
    <div>
      { statusButton }
    </div>
  )
};

export default StatusButton;