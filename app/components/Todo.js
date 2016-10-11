import React from 'react';

const Todo = ({
  props
}) => (
  <li>{ props.todo.text }</li>
);

export { Todo };