import { createContext, useContext } from "react";

export const todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "todomsg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const usetodo = () => {
    return useContext(todocontext)
}

export const todoProvider = todocontext.Provider