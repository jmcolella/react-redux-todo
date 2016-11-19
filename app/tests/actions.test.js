import { expect } from 'chai';
import * as constants from '../constants/todo_constants';
import * as actions from '../actions/todo_actions';

describe ( 'Redux actions', () => {

  let todo = {
      id: 1,
      text: "Hello World",
      completed: false,
      editing: false
    };

  describe ( 'addTodo', () => {
    let addTodo;

    beforeEach( () => {
      addTodo = actions.addTodo( "Hello World" );
    });

    it ( 'returns object with property type: ADD_TODO', () => {
      expect( addTodo ).to.have.property( 'type', constants.ADD_TODO );
    });

    it ( 'returns object with property id: 13 (it should just be a number)', () => {
      expect( addTodo ).to.have.property( 'id', 1 );
    });

    it ( 'returns object with property text: Hello World', () => {
      expect( addTodo ).to.have.property( 'text', "Hello World" );
    });
  });

  describe ( 'toggleTodo', () => {
    let toggleTodo;

    beforeEach( () => {
      toggleTodo = actions.toggleTodo( todo );
    });

    it ( 'returns object with property type: constants.TOGGLE_TODO', () => {
      expect( toggleTodo ).to.have.property( 'type': constants.TOGGLE_TODO );
    });

    it ( 'returns object with property id: todo.id', () => {
      expect( toggleTodo ).to.have.property( 'id': todo.id );
    });
  });

  describe ( 'editingTodo', () => {
    let editingTodo;

    beforeEach( () => {
      editingTodo = actions.editingTodo( todo );
    });

    it ( 'returns object with property type: constants.EDITING_TODO', () => {
      expect( editingTodo ).to.have.property( 'type': constants.EDITING_TODO );
    });

    it ( 'returns object with property id: todo.id', () => {
      expect( editingTodo ).to.have.property( 'id': todo.id );
    });
  });

  describe ( 'changeTodo', () => {
    let changeTodo;

    beforeEach( () => {
      changeTodo = actions.changeTodo( todo, "Hello World!" );
    });

    it ( 'returns object with property type: constants.CHANGE_TODO', () => {
      expect( changeTodo ).to.have.property( 'type': constants.CHANGE_TODO );
    });

    it ( 'returns object with property id: todo.id', () => {
      expect( changeTodo ).to.have.property( 'id': todo.id );
    });

    it ( 'returns object with property text: Hello World!', () => {
      expect( changeTodo ).to.have.property( 'text': "Hello World!" );
    });
  });

  describe ( 'editTodo', () => {
    let editTodo;

    beforeEach( () => {
      editTodo = actions.editTodo( todo, "Hello World!" );
    });

    it ( 'returns object with property type: constants.EDIT_TODO', () => {
      expect( editTodo ).to.have.property( 'type': constants.EDIT_TODO );
    });

    it ( 'returns object with property id: todo.id', () => {
      expect( editTodo ).to.have.property( 'id': todo.id );
    });

    it ( 'returns object with property text: Hello World!', () => {
      expect( editTodo ).to.have.property( 'text': "Hello World!" );
    });
  });

  describe ( 'deleteTodo', () => {
    let deleteTodo;

    beforeEach( () => {
      deleteTodo = actions.deleteTodo( todo );
    });

    it ( 'returns object with property type: constants.DELETE_TODO', () => {
      expect( deleteTodo ).to.have.property( 'type': constants.DELETE_TODO );
    });

    it ( 'returns object with property id: todo.id', () => {
      expect( deleteTodo ).to.have.property( 'id': todo.id );
    });
  });

  describe ( 'setVisibilityFilter', () => {
    let setVisibilityFilter;

    beforeEach( () => {
      setVisibilityFilter = actions.setVisibilityFilter( "SHOW_ALL" );
    });

    it ( 'returns object with property type: constants.SET_VISIBILITY_FILTER', () => {
      expect( setVisibilityFilter ).to.have.property( 'type': constants.SET_VISIBILITY_FILTER );
    });

    it ( 'returns object with property filter: SHOW_ALL', () => {
      expect( setVisibilityFilter ).to.have.property( 'filter': 'SHOW_ALL' );
    });
  });

});