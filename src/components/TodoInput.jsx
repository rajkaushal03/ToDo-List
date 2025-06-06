import React, { useState } from 'react';
import { useTodosContext } from '../context/ToDoContext';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const { addTodo } = useTodosContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input-field"
      />
      <button type="submit" className="todo-input-btn">Add</button>
    </form>
  );
}
