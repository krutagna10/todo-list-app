import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title, isCompleted) => {},
  onEditTodo: (editedTodo) => {},
  onDeleteTodo: (deleteId) => {},
  onDragEnd: (event) => {},
  onClearCompleted: () => {},
});

export default TodosContext;
