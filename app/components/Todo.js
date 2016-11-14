import React, { Component } from 'react';
import { dispatch } from 'redux';
import { toggleTodo, editingTodo, deleteTodo } from '../actions/todo_actions';
import TodoEdit from '../components/TodoEdit';
import '../assets/stylesheets/app.scss';


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
          className={ ( todo.completed ? "todo-complete" : "todo-incomplete" ) + " individual-todo"}
        >
          { todo.text }
        </li>

        <button
          onClick={
            () => store.dispatch( toggleTodo( todo ) )
          }
          className="todo-options todo-toggle"
        >
          { todo.completed ? <i className="fa fa-2x fa-undo" aria-hidden="true"></i> : <i className="fa fa-2x fa-check" aria-hidden="true"></i> }
        </button>

        <button
          onClick={
            () => store.dispatch( deleteTodo( todo ) )
          }
          className="todo-options todo-delete"
        >
          <i className="fa fa-2x fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
  }
  return (
    <div className="individual-todo-container">
      { todoRender }
    </div>
  )
};

export default Todo;
