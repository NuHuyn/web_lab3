import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
