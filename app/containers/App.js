import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer';
import styles from './application.css';

const App = () => {
  return (
    <div className="app-container">
      <AddTodo />

      <TodoList />

      <Footer />
    </div>
  )
};

export default App;