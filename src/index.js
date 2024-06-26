import { createStore } from "redux";
import todoReducer from "./todosReducer";
import { addTodos, removeTodos } from "./Actions";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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

store.subscribe(() => {
  console.log(store.getState());
  updateTodoList();
});

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo} <button onclick="removeTodoHandler(${index})">Remove</button></li>`;
    })
    .join("");
};

updateTodoList();
