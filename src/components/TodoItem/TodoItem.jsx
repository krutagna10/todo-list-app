import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import deleteIcon from "../../assets/icon-cross.svg";
import "./TodoItem.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
    console.log("Button Clicked");
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
          <p
            className={`todo__text fs-200 ${
              todo.isCompleted ? "todo__text--deleted" : ""
            }`}
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
          >
            {todo.title}
          </p>
        </div>
        <button className="todo__btn-delete" onClick={handleDeleteTodo}>
          <img src={deleteIcon} alt="" data-no-dnd="true" />
        </button>
      </li>
      <hr className="todo__horizontal-line" />
    </>
  );
}

export default TodoItem;
