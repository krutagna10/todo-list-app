import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import deleteIcon from "../../assets/icon-cross.svg";
import "./TodoItem.css";

function TodoItem({ todo }) {
  const { onEditTodo, onDeleteTodo } = useContext(TodosContext);

  function handleIsCompletedChange(event) {
    onEditTodo({ ...todo, isCompleted: event.target.checked });
  }

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  return (
    <>
      <li className="todo flex justify-between items-center gap-100">
        <div className="flex gap-100">
          <Checkbox
            id={todo.id}
            onChange={handleIsCompletedChange}
            checked={todo.isCompleted}
          />
          {todo.isCompleted ? (
            <del className="todo__deleted-text text-200">{todo.title}</del>
          ) : (
            <span className="text-200">{todo.title}</span>
          )}
        </div>
        <button className="todo__delete-btn" onClick={handleDeleteTodo}>
          <img src={deleteIcon} alt="" />
        </button>
      </li>
      <hr className="todo__horizontal-line" />
    </>
  );
}

export default TodoItem;
