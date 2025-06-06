import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function useTodosContext() {
  return useContext(TodoContext);
}

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
