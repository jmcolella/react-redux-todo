import { createStore, dispatch } from 'redux';
import { expect } from 'chai';
import { todo, todos, visibilityFilter } from '../app/reducers/todo_reducers';
import * as constants from '../app/constants/todo_constants';

describe ( 'Redux reducers', () => {

  describe ( 'Todos reducer', () => {
    let state;

    beforeEach( () => {
      state = [ { id: 1, text: "Test Todo", editing: false, completed: false } ]
    });

    it ( 'returns an additional state object with action ADD_TODO', () => {
      let addAction = {
        type: constants.ADD_TODO,
        id: 2,
        text: "New Todo"
      };

      expect( todos( state, addAction ) ).to.have.length( 2 );
    });

    it ( 'returns state with targeted object changed to completed `true`', () => {
      let toggleAction = {
        type: constants.TOGGLE_TODO,
        id: 1
      };

      expect( todos( state, toggleAction )[0].completed ).to.equal( true );
    });

    it ( 'returns state with target object changed to editing `true`',  () => {
      let editingAction = {
        type: constants.EDITING_TODO,
        id: 1
      };

      expect( todos( state, editingAction )[0].editing ).to.equal( true );
    });

    it ( 'returns state with target object text changed to input from action', () => {
      let changeText = "Test Todo!"
      let changeAction = {
        type: constants.CHANGE_TODO,
        id: 1,
        text: changeText
      };

      expect( todos( state, changeAction )[0].text ).to.equal( changeText );
    });

    it ( 'returns state with target object text changed to input from action', () => {
      let editText = "Test Todo!"
      let editAction = {
        type: constants.CHANGE_TODO,
        id: 1,
        text: editText
      };

      expect( todos( state, editAction )[0].text ).to.equal( editText );
    });

    it ( 'returns state with the targeted object deleted', () => {
      let deleteAction = {
        type: constants.DELETE_TODO,
        id: 1
      };

      expect( todos( state, deleteAction ) ).to.have.length( 0 );
    });

    it ( 'returns default state when action typed `undefined` passed', () => {
      let defaultAction = {
        type: undefined
      }
      expect( todos( state, defaultAction ) ).to.equal( state );
    });

  });

  describe ( 'Set Visibility Reducer', () => {

    it ( 'returns filter passed in through action', () => {
      let filterAction = {
        type: constants.SET_VISIBILITY_FILTER,
        filter: "SHOW_COMPLETED"
      };

      expect( visibilityFilter( undefined, filterAction ) ).to.equal( "SHOW_COMPLETED" );
    });

    it ( 'returns `SHOW_ALL` on default', () => {
      let defaultAction = {
        type: undefined
      };

      expect( visibilityFilter( undefined, defaultAction ) ).to.equal( "SHOW_ALL" );
    });
    
  });

});
