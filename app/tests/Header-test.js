import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Header from '../components/Header';

describe ( 'Header component', () => {
  let header;

  beforeEach( () => {
    header = mount( <Header title={ "Test" } /> );
  });

  it ( 'renders top level div with class `.app-header`', () => {
    expect( header.find( ".app-header" ) ).to.have.length( 1 );
  });

  it ( 'has props `title`', () => {
    debugger;
    expect( header.props().title ).to.exist;
  });

  it ( 'has props `title` equal to assigned value', () => {
    expect( header.props().title ).to.equal( "Test" );
  });

  it ( 'renders a `h1` with content of props', () => {
    expect( header.find( "h1" ).text() ).to.equal( header.props().title );
  });

});
