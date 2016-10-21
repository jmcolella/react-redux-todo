import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { App } from './containers/App';
import { todoApp } from './reducers/todo_reducers';

ReactDOM.render(
  <App store={ createStore( todoApp ) }/>,
  document.getElementById('app')
);