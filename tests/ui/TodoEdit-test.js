import React from 'react';
import { createStore, dispatch } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { todoApp } from '../../app/reducers/todo_reducers';
import { addTodo } from '../../app/actions/todo_actions';
import TodoEdit from '../../app/components/TodoEdit';

describe ( 'TodoEdit component', () => {

  let todoEdit, store;

  beforeEach( () => {
    store = createStore( todoApp );
    store.dispatch( addTodo( "Todo to Edit" ) );
    todoEdit = mount( <TodoEdit
                        todo = { store.getState().todos[0] }
                        store = { store } />
                    );
  });

  it ( 'renders a top div with class `.edit-todo-container`', () => {
    expect( todoEdit.find( '.edit-todo-container' ) ).to.have.length( 1 );
  });

  describe ( 'input', () => {
    it ( 'renders 1 input to the DOM', () => {
      expect( todoEdit.find( 'input' ) ).to.have.length( 1 );
    })
    it ( 'renders with value of todo.text props', () => {
      expect( todoEdit.find( 'input' ).props().value ).to.equal( todoEdit.props().todo.text );
    });

    it ( 'changes text of todo with input value onChange', () => {
      let inputVal = todoEdit.find( 'input' ).node.value = "Todo to Edit!";
      todoEdit.find( 'input' ).simulate( 'change' );
      expect( store.getState().todos[0].text ).to.equal( "Todo to Edit!" );
    });
  });

  describe ( 'button', () => {
    it ( 'renders 1 button to the DOM', () => {
      expect( todoEdit.find( 'button' ) ).to.have.length( 1 );
    });

    it ( 'completes editing Todo onClick', () => {
      let inputVal = todoEdit.find( 'input' ).node.value = "Todo to Edit!";
      todoEdit.find( 'button' ).simulate( 'click' );
      expect( store.getState().todos[0].text ).to.equal( "Todo to Edit!" );
    });
  });

});
