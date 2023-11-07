import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <span
        className="todo-item"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button className="button">Toggle</button>
      <button className="button">Delete</button>
    </div>
  );
};

export default TodoItem;
