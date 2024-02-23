/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addtodo } = useTodo();

  //add is basic function that is used when we click the submit button after writing the particular todo in the main field
  //at the end we make "setTodo("");" because we after adding the todo into the list we want that field to add more todos empty.
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addtodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
