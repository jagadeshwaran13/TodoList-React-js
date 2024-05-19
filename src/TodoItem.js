// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, editTodo }) => {
  return (
    <li>
      {todo}
      <div>
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
