import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [reminderTimes, setReminderTimes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminderTimes.forEach((time, index) => {
        if (time && new Date(time) <= now) {
          alert(`Reminder for: ${todos[index]}`);
          const newReminderTimes = [...reminderTimes];
          newReminderTimes[index] = null;
          setReminderTimes(newReminderTimes);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [reminderTimes, todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setReminderTimes([...reminderTimes, null]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    const newReminderTimes = reminderTimes.filter((time, i) => i !== index);
    setTodos(newTodos);
    setReminderTimes(newReminderTimes);
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

  const setReminder = (index, time) => {
    const newReminderTimes = [...reminderTimes];
    newReminderTimes[index] = time;
    setReminderTimes(newReminderTimes);
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
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
          setReminder={setReminder}
          reminderTimes={reminderTimes}
        />
      </div>
    </div>
  );
}

export default App;
