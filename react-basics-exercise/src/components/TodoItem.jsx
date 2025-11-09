import React from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{display:"flex", alignItems:"center", gap:10, padding:8, borderBottom:"1px solid #eee"}}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none", flex:1 }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
