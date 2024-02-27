/* eslint-disable no-unused-vars */
import { useContext,createContext } from "react";

export const ContextTodos=createContext({
    todos:[
        {
            id:1,
            todo:"message",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

export const useTodos=()=>{
    return useContext(ContextTodos);
}

export const TodoProvider=ContextTodos.Provider;