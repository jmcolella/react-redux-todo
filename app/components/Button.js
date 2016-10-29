import React from 'react';
import { dispatch } from 'redux';
import { toggleTodo, deleteTodo } from '../actions/todo_actions';

const Button = ({
  dispatchEvent,
  children
}) => {
  return (
    <button
      onClick={
        (() => dispatchEvent)()
      }
    >
      { children }
    </button>
  )
};

export default Button;