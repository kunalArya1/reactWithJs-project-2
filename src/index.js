import { createStore } from "redux";
import todoReducer from "./todosReducer";
import { addTodos, removeTodos } from "./Actions";

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Getting the content
const addButton = document.querySelector("#add");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// console.log(addButton, todoInput, todoList);

const addTodoHandler = () => {
  const todo = todoInput.value;
  store.dispatch(addTodos(todo));
  todoInput.value = "";
};


window.removeTodoHandler = (index) => {
  store.dispatch(removeTodos(index));
};

addButton.addEventListener("click", addTodoHandler);

