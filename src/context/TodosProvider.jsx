import TodosContext from "./TodosContext.jsx";
import { useEffect, useReducer } from "react";
import INITIAL_TODOS from "./data.js";

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
    case "edit-todo": {
      const updatedTodos = todos.map((todo) => {
        return action.editedTodo.id === todo.id ? action.editedTodo : todo;
      });
      return updatedTodos;
    }
    case "delete-todo": {
      const updatedTodos = todos.filter((todo) => {
        return action.deleteId !== todo.id;
      });
      return updatedTodos;
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

  function handleEditTodo(editedTodo) {
    dispatch({ type: "edit-todo", editedTodo: editedTodo });
  }

  function handleDeleteTodo(deleteId) {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onEditTodo: handleEditTodo,
    onDeleteTodo: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
