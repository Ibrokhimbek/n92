import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

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
          />
        );
      })}
    </div>
  );
};

export default TodoList;
