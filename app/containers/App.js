import React from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';
import Navigation from '../components/Navigation';
import '../assets/stylesheets/app.scss';

const App = () => {
  return (
    <div className="container app-container">
      <Header
        title={ "To Do List" } />

      <AddTodo />

      <Navigation />

      <TodoList />
    </div>
  )
};

export default App;
