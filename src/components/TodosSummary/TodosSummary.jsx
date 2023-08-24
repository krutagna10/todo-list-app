import Button from "../UI/Button/Button.jsx";
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
      <p className="text-100">{itemsLeft} items left</p>
      <Button onClick={onClearCompleted}>Clear Completed</Button>
    </div>
  );
}

export default TodosSummary;
