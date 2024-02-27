/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import { useTodos } from "../context/context";

function TodoForm() {
  const { addTodo } = useTodos();
  const [todo, settodo] = useState([]);

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    settodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        // value={todo}
        // onChange={(e)=>settodo(e.target.value)}
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
