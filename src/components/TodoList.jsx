import React, { useState } from 'react';
import { useTodosContext } from '../context/ToDoContext';

export default function TodoList() {
    const { todos, removeTodo, editTodo } = useTodosContext();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleEdit = (id) => {
        if (editText.trim()) {
            editTodo(id, editText);
            setEditId(null);
            setEditText('');
        }
    };

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-list-item">
                    {editId === todo.id ? (
                        <>
                            <input
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                className="todo-list-edit-input"
                            />
                            <button onClick={() => handleEdit(todo.id)}>Save</button>
                            <button onClick={() => setEditId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <span className="todo-list-text">{todo.text}</span>
                            <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => removeTodo(todo.id)}>Remove</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
