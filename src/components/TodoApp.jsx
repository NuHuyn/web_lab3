import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ]);

  function addTodo(text) {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos(prev => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div style={{maxWidth:600, margin: "0 auto", padding: "10px 50px"}}>
      <h2>Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
