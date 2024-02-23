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
  // const toggleComplete = (id) => {
  //   settodos((prevval)=>{
  //     prevval.map((val)=>{val.id===id?{...val,completed:!val.completed}:val})
  //   })
  // };
  // this fucntion is also but we dont use the same {} in the map funtions instead we use () as () has a automatic return associated with them 
  // wihile using {} would req us to use aa reutrn statement with them in the part : { "RETURN" val.id===id?{...val,completed:!val.completed}:val})

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));//"todos" written here is just a string  that we have given to represent our data in the browser's storage, it has nothing to do with setItem. Syntax of SETITEM=(KEY,VALUE)
  }, [todos]);
  
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));//we mention "todos" as this is what is the key which w eare using to save our info in the browser's local storage 
    //we can see it in the function above.
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

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
