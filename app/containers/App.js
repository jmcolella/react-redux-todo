import React from 'react';
import { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer';

const App = ( { store } ) => {
  return (
    <div>
      <AddTodo store={ store } />

      <TodoList store={ store } />

      <Footer store={ store } />
    </div>
  )
};
// class App extends Component {
//   debugger;
//   render() {
//     return (
//       <div>
//         Hello world!
//       </div>
//     )
//   }
// };

export { App };