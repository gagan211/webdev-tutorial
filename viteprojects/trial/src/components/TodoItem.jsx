/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import  { useTodos } from '../context/context'

function TodoItem({ todo }) {
    const {deleteTodo,toggleCompleted,updateTodo}=useTodos()
    const [TodoMsg, setTodoMsg] = useState(todo.todo)
    const [IsTodoEditable, setIsTodoEditable] = useState(false)

    const toggleComplete=()=>{
        toggleCompleted(todo.id)
    }
    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:TodoMsg})
        setIsTodoEditable(!false)
    }


  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleComplete}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  IsTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={TodoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!IsTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (IsTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {IsTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
