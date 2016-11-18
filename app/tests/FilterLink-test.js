import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FilterLink from '../components/FilterLink';

describe ( 'Filter Link component', () => {

  it ( 'renders a top div with class `.individual-filter-link`', () => {
    let filterLink = mount( <FilterLink /> );
    expect( filterLink.find( '.individual-filter-link' ) ).to.have.length( 1 );
  });

  it ( 'renders a link when props `active` is false', () => {
    let filterLink = mount( <FilterLink /> );
    filterLink.setProps( { active: false } );
    expect( filterLink.find( 'a' ) ).to.have.length( 1 );
  });

  it ( 'renders a span when props `active is true`', () => {
    let filterLink = mount( <FilterLink /> );
    filterLink.setProps( { active: true } );
    expect( filterLink.find( 'span' ) ).to.have.length( 1 );
  });

  it ( 'renders non-active link with content of props `children`', () => {
    let filterLink = mount( <FilterLink /> );
    filterLink.setProps( { active: false, children: "All" } );
    expect( filterLink.find( 'a' ).text() ).to.equal( filterLink.props().children );
  });

  it ( 'renders active span with content of props `children`', () => {
    let filterLink = mount( <FilterLink /> );
    filterLink.setProps( { active: true, children: "All" } );
    expect( filterLink.find( 'span' ).text() ).to.equal( filterLink.props().children );
  });
    
});
