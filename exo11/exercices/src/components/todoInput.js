import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      addTodo({
        id: Date.now(),
        title: newTodo,
        isCompleted: false,
        isEditing: false,
      });
      setNewTodo("");
    } else if (e.key === "Escape") {
      setNewTodo("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Nouvelle tâche"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default TodoInput;
