import React from 'react';
import { dispatch } from 'redux';
import { addTodo } from '../actions/todo_actions';
import '../assets/stylesheets/app.scss';

const AddTodo = ( props, { store } ) => {
  let input;

  return (
    <div className="add-todo-container">
      <input
        ref={ ( node ) => {
          input = node
        }}
        type="text"
        placeholder="add new To Do item" />

      <button
        onClick={() => {
            store.dispatch(addTodo( input.value ));
            input.value = '';
          }
        }
      >
        Add Item
      </button>
    </div>
  )
};

AddTodo.contextTypes = {
  store: React.PropTypes.object
};

export default AddTodo;
