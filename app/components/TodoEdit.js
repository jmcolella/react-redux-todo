import React from 'react';
import { dispatch } from 'redux';
import { changeTodo, editTodo } from '../actions/todo_actions';
import '../assets/stylesheets/app.scss';

const TodoEdit = ({
  store,
  todo,
  handleChange,
  handleEditTodo
}) => {
  let input;

  return (
    <div className="edit-todo-container">
      <input
        ref={ ( node ) => {
          input = node
        }}
        onChange={
          () => store.dispatch( changeTodo( todo, input.value ) )
        }
        type="text"
        value={ todo.text } />

      <button
        onClick={
          () => store.dispatch( editTodo( todo, input.value ) )
        }
      >
        Edit Todo
      </button>
    </div>
  )
};

export default TodoEdit;
