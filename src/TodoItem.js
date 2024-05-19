import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, editTodo, setReminder, reminderTime }) => {
  return (
    <li>
      {todo}
      <div>
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
        <input 
          type="datetime-local" 
          value={reminderTime || ''} 
          onChange={(e) => setReminder(index, e.target.value)} 
        />
      </div>
    </li>
  );
};

export default TodoItem;
