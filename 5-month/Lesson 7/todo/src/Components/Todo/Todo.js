import React, { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";

const Todo = ({ id, task, isEditing, isCompleted }) => {
  const [newTask, setNewTask] = useState(task);

  const { toggleEdit, updateTodo, deleteTodo, completeTodo } =
    useContext(TodoContext);

  return isEditing ? (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-[#000] rounded p-1 mr-4"
      />
      <button
        onClick={() => updateTodo(id, newTask)}
        className="border border-black p-1 rounded"
      >
        Save
      </button>
    </div>
  ) : (
    <div
      className={`${
        isCompleted && "bg-green-700"
      } border border-black rounded p-2 w-[200px]`}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => completeTodo(id)}
      />
      <h2 className="my-2">{task}</h2>
      <button
        className="bg-orange-500 text-white p-1 mr-1"
        onClick={() => toggleEdit(id)}
      >
        Edit
      </button>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-orange-500 text-white p-1 mr-1"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
