import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TodosContext from "../../context/TodosContext.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import deleteIcon from "../../assets/icon-cross.svg";
import "./TodoItem.css";

function TodoItem({ id, todo }) {
  const { onEditTodo, onDeleteTodo } = useContext(TodosContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleIsCompletedChange(event) {
    onEditTodo({ ...todo, isCompleted: event.target.checked });
  }

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  return (
    <>
      <li className="todo flex items-center gap">
        <Checkbox
          id={todo.id}
          onChange={handleIsCompletedChange}
          checked={todo.isCompleted}
        />
        <div
          className="todo__text-wrapper"
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          <p
            className={`todo__text fs-200 ${
              todo.isCompleted ? "todo__text--deleted" : ""
            }`}
          >
            {todo.title}
          </p>
        </div>
        <button
          className="todo__btn-delete"
          onClick={handleDeleteTodo}
          aria-label="Delete Todo"
        >
          <img src={deleteIcon} alt="" />
        </button>
      </li>
    </>
  );
}

export default TodoItem;
