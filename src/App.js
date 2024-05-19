// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const updateTodo = () => {
    const newTodos = [...todos];
    newTodos[editIndex] = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTodo}>Add</button>
      {editIndex !== null && (
        <div>
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
            placeholder="Edit task" 
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      )}
      <div className="todo-container">
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
