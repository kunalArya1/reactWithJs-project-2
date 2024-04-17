import { ADD_TODO, REMOVE_TODO } from "./Actions";

const initailState = { todos: [] };

const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
      break;
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => {
          return index != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
