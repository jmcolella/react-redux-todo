import React from 'react';
import { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <AddTodo />

      <TodoList />

      <Footer />
    </div>
  )
};

export default App;