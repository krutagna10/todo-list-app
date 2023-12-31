import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./TodosSummary.css";

function TodosSummary() {
  const { todos, onClearCompleted } = useContext(TodosContext);

  const itemsLeft = todos.reduce((acc, todo) => {
    return !todo.isCompleted ? acc + 1 : acc;
  }, 0);

  return (
    <div className="todos__summary flex justify-between">
      <p className="fs-100">{itemsLeft} items left</p>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodosSummary;
