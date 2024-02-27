import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./context/context";

function App() {
  const [todos, settodos] = useState([]);

  const addItem = (todos) => {
    settodos((oldtodo) => [{ id: Date.now(), ...todos }, ...oldtodo]);
  };

  const deleteTodo = (id) => {
    settodos((prevval) => {
      prevval.filter((eachval) => eachval.id != id);
    });
  };

  const toggleComplete = (id) => {
    settodos((prevval) => {
      prevval.map((val) => {
        return val.id === id ? { ...val, completed: !val.completed } : val;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data && data.length > 0) {
      settodos(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <TodoProvider value={{ todos, addItem, deleteTodo, toggleComplete }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;

