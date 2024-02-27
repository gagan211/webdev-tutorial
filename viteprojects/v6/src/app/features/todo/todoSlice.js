/* eslint-disable no-unused-vars */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "enter the todos",
    },
  ],
};

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload,
              }
              state.todos.push(todo)
        },//state will give the instantaneous state of the function
        //action-the values or  the props that we need to change or access the state.
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((item)=>item.id!==action.payload)
        },
        },
})

export const {addTodo,removeTodo}=TodoSlice.actions;
export default TodoSlice.reducer