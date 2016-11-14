import React, { Component } from 'react';
import Todo from '../components/Todo';
import '../assets/stylesheets/app.scss';

class TodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
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
    const { store } = this.context;
    const state = store.getState();
    const todos = this.getVisibleTodos( state.todos, state.visibilityFilter );
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
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

TodoList.contextTypes = {
  store: React.PropTypes.object
};

export default TodoList;
