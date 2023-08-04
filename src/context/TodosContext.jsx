import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title, isCompleted) => {},
});

export default TodosContext;
