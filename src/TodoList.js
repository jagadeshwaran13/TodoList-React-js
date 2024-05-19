// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
