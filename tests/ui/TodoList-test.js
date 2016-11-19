import React from 'react';
import { createStore, dispatch } from 'redux';
import { todoApp } from '../../app/reducers/todo_reducers';
import { addTodo } from '../../app/actions/todo_actions';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import TodoList from '../../app/containers/TodoList';
import Todo from '../../app/components/Todo';

describe ( 'TodoList Container', () => {
  let todoList, store;

  beforeEach( () => {
    store = createStore( todoApp );
    todoList = mount( <TodoList />, {
      context: { store }
    });
  });

  it ( 'should render div with class `todo-list-container`', () => {
    expect( todoList.find( '.todo-list-container' ) ).to.have.length( 1 );
  });

  it ( 'should render Todo component if todos present', () => {
    todoList.context().store.dispatch( addTodo( "New Todo" ) );
    todoList.update();
    expect( todoList.find( Todo ) ).to.have.length( 1 );
  });

});
