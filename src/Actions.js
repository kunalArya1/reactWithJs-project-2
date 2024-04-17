export const ADD_TODO = "todos/added";
export const REMOVE_TODO = "todos/removed";

export const addTodos = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodos = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});
