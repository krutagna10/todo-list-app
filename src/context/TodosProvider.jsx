import TodosContext from "./TodosContext.jsx";
import { useReducer } from "react";
import INITIAL_TODOS from "../data";

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      const nextTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: action.isCompleted,
      };
      return [...todos, nextTodo];
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}
function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);

  function handleAddTodo(title, isCompleted) {
    dispatch({ type: "add-todo", title: title, isCompleted: isCompleted });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
