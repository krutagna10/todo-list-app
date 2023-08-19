import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title, isCompleted) => {},
  onEditTodo: (editedTodo) => {},
  onDeleteTodo: (deleteId) => {},
  onClearCompleted: () => {},
});

export default TodosContext;
