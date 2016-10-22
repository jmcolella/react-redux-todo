import React, { Component } from 'react';
import Todo from '../components/Todo';

class TodoList extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe( () =>
      this.forceUpdate()
     )
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getVisibleTodos ( todos, filter ) {
    switch ( filter ) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter( todo => todo.completed )
      case 'SHOW_ACTIVE':
        return todos.filter( todo => !todo.completed )
      default:
        return todos
    }
  }
  render() {
    const { store } = this.props;
    const state = store.getState();
    const todos = this.getVisibleTodos( state.todos, state.visibilityFilter );
    return (
      <div>
        <ul>
        {
          todos.map( ( todo ) => {
            return <Todo
                      key={ todo.id }
                      todo={ todo }
                      store={ store } />
          })
        }
        </ul>
      </div>
    )
  }
};

export default TodoList;