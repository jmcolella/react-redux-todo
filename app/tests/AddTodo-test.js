import React from 'react';
import { createStore, dispatch } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { todoApp } from '../reducers/todo_reducers';
import AddTodo from '../components/AddTodo';

describe ( 'Add Todo component', () =>{
  let addTodo, store;

  beforeEach( () =>{
    store = createStore( todoApp );
    addTodo = mount( <AddTodo />, {
      context: { store }
    })
  });

  it ( 'renders top div with class `.add-todo-container`', () => {
    expect( addTodo.find( '.add-todo-container' ) ).to.have.length( 1 );
  });

  it ( 'renders a single input', () => {
    expect( addTodo.find( 'input' ) ).to.have.length( 1 );
  });

  it ( 'renders a button with text `Add Item`', () => {
    expect( addTodo.find( 'button' ).text() ).to.equal( "Add Item" );
  });

  it ( 'adds a new Todo when button is clicked', () => {
    addTodo.find( 'button' ).simulate( 'click' );
    expect( addTodo.context().store.getState().todos ).to.have.length( 1 );
  });

  it ( 'adds a new Todo with text equal to value of input', () => {
    let inputVal = addTodo.find( 'input' ).node.value = "Hello";
    addTodo.find( 'button' ).simulate( 'click' );
    expect( addTodo.context().store.getState().todos[0].text ).to.equal( inputVal );
  });

});
