import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './containers/App';
import Provider from './containers/Provider';
import { todoApp } from './reducers/todo_reducers';

ReactDOM.render(
  <Provider store={ createStore( todoApp ) }>
    <App />
  </Provider>,
  document.getElementById('app')
);