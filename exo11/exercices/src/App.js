import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";
import TodoFilter from "./components/todoFilter";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <TodoFilter />
    </div>
  );
}

export default App;
