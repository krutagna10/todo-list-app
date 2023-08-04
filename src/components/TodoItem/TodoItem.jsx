import "./TodoItem.css";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function TodoItem({ todo, index }) {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <li className="todo__item">{todo.title}</li>
      {index < todos.length - 1 && <hr className="todo__horizontal-line" />}
    </>
  );
}

export default TodoItem;
