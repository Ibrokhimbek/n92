import React from "react";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

const TodoApp = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
