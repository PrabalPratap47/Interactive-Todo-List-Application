import { createContext, useContext } from "react";

export const TodoContext = createContext({
      //todo ki properties
  todos: [
    {
      // ek todo ka structure
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext); //useContext ko context dena pdega hmesha
};

export const TodoProvider = TodoContext.Provider;
