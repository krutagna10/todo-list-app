import "./TodoItem.css";
import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import InputCheckbox from "../InputCheckbox/InputCheckbox.jsx";

function TodoItem({ todo, index }) {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <li className="todo__item flex items-center gap-4">
        <InputCheckbox checked={todo.isCompleted} />
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
