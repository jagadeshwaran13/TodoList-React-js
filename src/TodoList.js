import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo, setReminder, reminderTimes }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
          setReminder={setReminder}
          reminderTime={reminderTimes[index]}
        />
      ))}
    </ul>
  );
};

export default TodoList;
