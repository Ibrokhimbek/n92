import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, toggleEdit, deleteTodo, updateTodo, completeTodo }) => {
  return (
    <div className="flex flex-wrap">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            isEditing={todo.isEditing}
            isCompleted={todo.isCompleted}
            toggleEdit={toggleEdit}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
