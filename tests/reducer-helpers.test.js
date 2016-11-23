import { expect } from 'chai';
import * as constants from '../app/constants/todo_constants';
import * as Helpers from '../app/utils/todo_helpers';

describe ( 'Todo Reducer helpers', () => {

  describe ( 'Todo helper', () => {

    let state;

    beforeEach( () => {
      state = { id: 1, text: "Test Todo", completed: false, editing: false }
    });

    it ( 'returns a new todo; action type ADD_TODO', () => {
      let addAction = {
        type: constants.ADD_TODO,
        id: 2,
        text: "New Todo"
      };

      expect( Helpers.todo( [], addAction ) ).to.eql( {
        id: addAction.id,
        text: addAction.text,
        editing: false,
        completed: false
      });
    });

    it ( 'returns new Object with !completed; action type TOGGLE_TODO', () => {
      let toggleAction = {
        type: constants.TOGGLE_TODO,
        id: 1
      };

      expect( Helpers.todo( state, toggleAction ) ).to.eql( {
        id: 1,
        text: "Test Todo",
        completed: true,
        editing: false
      });
    });

    it ( 'returns new Object with !editing; action type EDITING_TODO', () => {
      let editingAction = {
        type: constants.EDITING_TODO,
        id: 1
      };

      expect( Helpers.todo( state, editingAction ) ).to.eql( {
        id: 1,
        text: "Test Todo",
        completed: false,
        editing: true
      });
    });

    it ( 'returns new Object with input text; action type CHANGE_TODO', () => {
      let changeAction = {
        type: constants.CHANGE_TODO,
        id: 1,
        text: "Test Todo!"
      };

      expect( Helpers.todo( state, changeAction ) ).to.eql( {
        id: 1,
        text: "Test Todo!",
        completed: false,
        editing: false
      });
    });

    it ( 'returns new Object with input text and !editing; action type EDIT_TODO', () => {
      let editAction = {
        type: constants.EDIT_TODO,
        id: 1,
        text: "Test Todo!"
      };

      expect( Helpers.todo( state, editAction ) ).to.eql( {
        id: 1,
        text: "Test Todo!",
        completed: false,
        editing: false
      });
    });

    it ( 'returns false when Object is target for deletion; action type DELETE_TODO', () => {
      let deleteAction = {
        type: constants.DELETE_TODO,
        id: 1
      };

      expect( Helpers.todo( state, deleteAction ) ).to.eql( false );
    });

    it ( 'returns the passed state when action has type undefined', () => {
      let undefinedAction = {
        type: undefined
      };

      expect( Helpers.todo( state, undefinedAction ) ).to.eql( state );
    });

  });

});
