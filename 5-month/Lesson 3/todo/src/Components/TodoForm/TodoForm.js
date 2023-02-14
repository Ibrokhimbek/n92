import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

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
