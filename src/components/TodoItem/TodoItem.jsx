import "./TodoItem.css";
import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function TodoItem({ todo, index }) {
  const { todos, onEditTodo } = useContext(TodosContext);

  function handleIsCompletedChange(event) {
    console.log("Todo Checkbox in TodoItem.js has been edited");
    onEditTodo({ ...todo, isCompleted: event.target.checked });
  }

  return (
    <>
      <li className="todo__item flex items-center gap-4">
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox__input"
            className={`checkbox__input ${todo.isCompleted ? "checked" : ""}`}
            onChange={handleIsCompletedChange}
            // checked={todo.isCompleted}
          />
          <label htmlFor="checkbox__input" className="checkbox__label" />
        </div>
        {todo.isCompleted ? (
          <del className="todo__deleted-text">{todo.title}</del>
        ) : (
          <span>{todo.title}</span>
        )}
      </li>
      {index < todos.length - 1 && <hr className="todo__horizontal-line" />}
    </>
  );
}

export default TodoItem;
