// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
