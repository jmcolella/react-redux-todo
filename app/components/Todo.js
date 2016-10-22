import React from 'react';
import { dispatch } from 'redux';
import { toggleTodo } from '../actions/todo_actions';

const Todo = ( { store, todo } ) => (
  <li
    onClick={ () => store.dispatch( toggleTodo( todo ) ) }
    style={{ color: todo.completed ? 'green' : 'black'  }}
  >
    { todo.text }
  </li>
);

export default Todo;