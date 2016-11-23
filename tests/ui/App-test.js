import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../../app/containers/App';
import Header from '../../app/components/Header';
import AddTodo from '../../app/components/AddTodo';
import Navigation from '../../app/components/Navigation';
import TodoList from '../../app/containers/TodoList';

describe ( 'App container', () => {
  it ( 'should render div with class `app-container`', () => {
    let app = shallow( <App /> );
    expect( app.find( '.app-container' ) ).to.have.length( 1 );
  });

  it ( 'should render Header component', () => {
    let app = shallow( <App /> );
    expect( app.find( Header ) ).to.have.length( 1 );
  });

  it ( 'should render AddTodo component', () => {
    let app = shallow( <App /> );
    expect( app.find( AddTodo ) ).to.have.length( 1 );
  });

  it ( 'should render Navigation component', () => {
    let app = shallow( <App /> );
    expect( app.find( Navigation ) ).to.have.length( 1 );
  });

  it ( 'should render TodoList component', () => {
    let app = shallow( <App /> );
    expect( app.find( TodoList ) ).to.have.length( 1 );
  });
})
