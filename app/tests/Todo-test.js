import React from 'react';
import { createStore, dispatch } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { todoApp } from '../reducers/todo_reducers';
import { addTodo } from '../actions/todo_actions';
import Todo from '../components/Todo';
import TodoEdit from '../components/TodoEdit';

describe ( 'Todo component', () => {

  let store;

  let testTodoIncomplete = {
    id: 1,
    text: "Test Todo",
    completed: false,
    editing: false
  };

  let testTodoComplete = {
    id: 1,
    text: "Test Todo",
    completed: true,
    editing: false
  };

  beforeEach( () => {
      store = createStore( todoApp );
  });

  it ( 'renders a top div with class `.individual-todo-container`', () => {
    let todo = mount( <Todo
                        todo = { testTodoIncomplete }
                        store={ store } />
                    );
    expect( todo.find( '.individual-todo-container' ) ).to.have.length( 1 );
  });

  describe ( 'editing prop is false', () => {
    describe ( '<li> node', () => {
      it ( 'renders 1 <li> node', () => {
        let todo = mount( <Todo
                            todo = { testTodoIncomplete }
                            store={ store } />
                         );
        expect( todo.find( "li" ) ).to.have.length( 1 );
      });

      it ( 'renders <li> node with text equal to todo.text from props', () => {
        let todo = mount( <Todo
                            todo = { testTodoIncomplete }
                            store={ store } />
                        );
        expect( todo.find( "li" ).text() ).to.equal( todo.props().todo.text );
      });

      it ( 'changes todo.editing from false to true onClick', () => {
        store.dispatch( addTodo( "Test Todo" ) );
        let todo = mount( <Todo
                            todo = { store.getState().todos[0] }
                            store={ store } />
                        );
        todo.find( "li" ).simulate( "click" );
        expect( todo.props().store.getState().todos[0].editing ).to.equal( true );
      });

      it ( 'renders <li> node with class `.todo-incomplete` with todo.completed props false', () => {
        let todo = mount( <Todo
                            todo = { testTodoIncomplete }
                            store={ store } />
                        );
        expect( todo.find( '.todo-incomplete' ) ).to.have.length( 1 );
      });

      it ( 'renders <li> node with class `.todo-complete` with todo.completed props true', () => {
        let todo = mount( <Todo
                            todo = { testTodoComplete }
                            store={ store } />
                        );
        expect( todo.find( '.todo-complete' ) ).to.have.length( 1 );
      });
    });

    describe ( '<button> nodes', () => {
      describe ( 'toggle todo button', () => {
        it ( 'renders with class `.todo-toggle`', () => {
          let todo = mount( <Todo
            todo = { testTodoIncomplete }
            store={ store } />
          );
          expect( todo.find( ".todo-toggle" ) ).to.have.length( 1 );
        });

        it ( 'renders <i> node with class `.fa-check` with todo.completed props false', () => {
          let todo = mount( <Todo
            todo = { testTodoIncomplete }
            store={ store } />
          );
          expect( todo.find( ".fa-check" ) ).to.have.length( 1 );
        });

        it ( 'renders <i> node with class `.fa-undo` with todo.completed props true', () => {
          let todo = mount( <Todo
            todo = { testTodoComplete }
            store={ store } />
          );
          expect( todo.find( ".fa-undo" ) ).to.have.length( 1 );
        });

        it ( 'changes todo.completed from false to true onClick', () => {
          store.dispatch( addTodo( "Test Todo" ) );
          let todo = mount( <Todo
            todo = { store.getState().todos[0] }
            store={ store } />
          );
          todo.find( ".todo-toggle" ).simulate( "click" );
          expect( todo.props().store.getState().todos[0].completed ).to.equal( true );
        });
      });

      describe ( 'delete todo button', () => {
        it ( 'renders with class `.todo-delete`', () => {
          let todo = mount( <Todo
            todo = { testTodoIncomplete }
            store={ store } />
          );
          expect( todo.find( ".todo-delete" ) ).to.have.length( 1 );
        });

        it ( 'removes todo from store onClick', () => {
          store.dispatch( addTodo( "Test Todo" ) );
          let todo = mount( <Todo
            todo = { store.getState().todos[0] }
            store={ store } />
          );
          todo.find( ".todo-delete" ).simulate( "click" );
          expect( store.getState().todos ).to.have.length( 0 );
        });
      });
    });
  });

  describe ( 'editing prop is true', () => {
    let testTodoEditing = {
      id: 1,
      text: "Test Todo",
      completed: false,
      editing: true
    };

    it ( 'renders child component TodoEdit', () => {
      let todo = mount( <Todo
                          todo = { testTodoEditing }
                          store={ store } />
                      );
      expect( todo.find( TodoEdit ) ).to.have.length( 1 );
    });
  });

});
