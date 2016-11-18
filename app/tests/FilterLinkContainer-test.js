import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { todoApp } from '../reducers/todo_reducers';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import FilterLink from '../components/FilterLink';

describe ( 'Filter Link Container', () => {
  let filterLink, store;

  beforeEach( () => {
    store = createStore( todoApp );
    filterLink = mount( <FilterLinkContainer
                          store={ store }
                          filter={ "SHOW_ALL" }
                          children={ "All" } />
                      )
  });

  it ( 'renders FilterLink component', () => {
    expect( filterLink.find( FilterLink ) ).to.have.length( 1 );
  });
  
});
