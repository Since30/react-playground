import React from "react";

const TodoFilter = ({ filterTodos }) => {
  return (
    <div>
      <button onClick={() => filterTodos("all")}>Tous</button>
      <button onClick={() => filterTodos("completed")}>Complétés</button>
      <button onClick={() => filterTodos("active")}>Actifs</button>
    </div>
  );
};

export default TodoFilter;
