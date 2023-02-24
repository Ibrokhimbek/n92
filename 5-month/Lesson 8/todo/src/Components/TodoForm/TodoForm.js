import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(task);
  };

  return (
    <form className="my-10">
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        className="border border-[#000] rounded p-1 mr-4"
      />
      <button
        onClick={handleAddTodo}
        className="border border-black p-1 rounded"
      >
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
