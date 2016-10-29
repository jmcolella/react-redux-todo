import React, { Component } from 'react';
import { dispatch } from 'redux';
import { changeTodo, editingTodo } from '../actions/todo_actions';
import TodoEdit from '../components/TodoEdit';
import StatusButton from '../components/StatusButton';


class Todo extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe( () =>
      this.forceUpdate()
    )
  }
  handleChange( input ) {
    const { todo, store } = this.props;
    store.dispatch( changeTodo( todo, input ) );
  }
  componentWillUnmount() {
    this.unsubscribe;
  }
  render() {
    const { todo, store } = this.props;
    let todoRender;
    if ( todo.editing ) {
      todoRender =
        <TodoEdit
          handleChange={ this.handleChange.bind(this) }
          todo={ todo }
          store={ store } />
    } else {
      todoRender =
        <div>
          <li
            onClick={ () => store.dispatch( editingTodo( todo ) )
            }
            style={{color: todo.completed ? "green" : "black" }}
          >
            { todo.text }
          </li>
          <StatusButton
            todo={ todo }
            store={ store } />
        </div>
    }
    return (
      <div>
        { todoRender }
      </div>
    )
  }
};

export default Todo;