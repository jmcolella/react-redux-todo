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
  render() {
    const { store } = this.props;
    const state = store.getState();
    return (
      <div>
        <ul>
        {
          state.todos.map( ( todo ) => {
            return <Todo
                      key={ todo.id }
                      todo={ todo } />
          })
        }
        </ul>
      </div>
    )
  }
};

export default TodoList;