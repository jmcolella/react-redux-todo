import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { todoApp } from '../../app/reducers/todo_reducers';
import Navigation from '../../app/components/Navigation';
import FilterLinkContainer from '../../app/containers/FilterLinkContainer';

describe ( 'Navigation component', () => {

  let nav, store;

  beforeEach( () => {
    store = createStore( todoApp );
    nav = mount( <Navigation />, {
      context: { store }
    });
  });

  it ( 'renders a top div with class `.navigation-container`', () => {
    expect( nav.find( '.navigation-container' ) ).to.have.length( 1 );
  });

  it ( 'renders three FilterLinkContainer child components', () => {
    expect( nav.find( FilterLinkContainer ) ).to.have.length( 3 );
  });

});
