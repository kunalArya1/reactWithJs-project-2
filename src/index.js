import { createStore } from "redux";
import todoReducer from "./todosReducer";

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Getting the content
const addButton = document.querySelector("#add");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// console.log(addButton, todoInput, todoList);
 