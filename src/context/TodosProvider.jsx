import { useReducer } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import TodosContext from "./TodosContext.jsx";
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
      return todos.map((todo) => {
        return action.editedTodo.id === todo.id ? action.editedTodo : todo;
      });
    }
    case "delete-todo": {
      return todos.filter((todo) => {
        return action.deleteId !== todo.id;
      });
    }
    case "drag-todos": {
      const activeIndex = todos.findIndex(
        (todo) => todo.id === action.activeId,
      );
      const overIndex = todos.findIndex((todo) => todo.id === action.overId);
      return arrayMove(todos, activeIndex, overIndex);
    }
    case "clear-completed": {
      return todos.filter((todo) => {
        return !todo.isCompleted;
      });
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

  function handleDragEnd(activeId, overId) {
    dispatch({
      type: "drag-todos",
      activeId: activeId,
      overId: overId,
    });
  }

  function handleClearCompleted() {
    dispatch({ type: "clear-completed" });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onEditTodo: handleEditTodo,
    onDeleteTodo: handleDeleteTodo,
    onClearCompleted: handleClearCompleted,
    onDragEnd: handleDragEnd,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
