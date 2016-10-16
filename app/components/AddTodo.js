import React from 'react';
import { dispatch } from 'redux';
import { addTodo } from '../actions/todo_actions';

const AddTodo = ( { store } ) => {
  let input;

  return (
    <div>
      <input ref={ node => { input = node } } type="text" placeholder="add new To Do item" />
      <button onClick={ dispatch(addTodo( input.value )) }>add item</button>
    </div>
  )
};

export default { AddTodo };