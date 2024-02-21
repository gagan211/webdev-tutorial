import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
function App() {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos((oldtodo) => [{ id: Date.now(), ...todo }, ...oldtodo]);
  };

  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((eachval) => (eachval.id === id ? todo : eachval))
    );
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((eachval) => eachval.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, completed: !val.completed } : val
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addtodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
