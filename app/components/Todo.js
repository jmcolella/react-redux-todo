import React, { Component } from 'react';
import { dispatch } from 'redux';
import { toggleTodo, editingTodo, deleteTodo } from '../actions/todo_actions';
import TodoEdit from '../components/TodoEdit';


const Todo = ( { store, todo } ) => {
  let todoRender;
  if ( todo.editing ) {
    todoRender =
      <TodoEdit
        todo={ todo }
        store={ store } />
  } else {
    todoRender =
      <div>
        <li
          onClick={
            () => store.dispatch( editingTodo( todo ) )
          }
          style={{color: todo.completed ? "green" : "black" }}
        >
          { todo.text }
        </li>

        <button
          onClick={
            () => store.dispatch( toggleTodo( todo ) )
          }
        >
          { todo.completed ? "Undo" : "Complete" }
        </button>

        <button
          onClick={
            () => store.dispatch( deleteTodo( todo ) )
          }
        >
          Delete
        </button>
      </div>
  }
  return (
    <div>
      { todoRender }
    </div>
  )
};

export default Todo;