import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title) => {},
});

export default TodosContext;
