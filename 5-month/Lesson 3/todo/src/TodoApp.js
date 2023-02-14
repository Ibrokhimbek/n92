import React, { useState } from "react";
import TodoForm from "./Components/TodoForm/TodoForm";
import { v4 as uuid } from "uuid";
import TodoList from "./Components/TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const todo = {
      id: uuid(),
      task,
      isEditing: false,
      isCompleted: false,
    };
    setTodos([...todos, todo]);
  };

  const toggleEdit = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
        return todo;
      }
      return todo;
    });

    setTodos([...newTodos]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos([...newTodos]);
  };

  const updateTodo = (id, newTask) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = newTask;
        todo.isEditing = false;
        return todo;
      }
      return todo;
    });

    setTodos([...newTodos]);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo;
    });

    setTodos([...newTodos]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleEdit={toggleEdit}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default TodoApp;
