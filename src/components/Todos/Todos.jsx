import TodoList from "../TodoList/TodoList.jsx";
import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./Todos.css";
import Button from "../UI/Button/Button.jsx";

function Todos() {
  const { todos, onClearCompleted } = useContext(TodosContext);
  const [currentFilter, setCurrentFilter] = useState("");

  function handleAllClick() {
    setCurrentFilter("");
  }

  function handleActiveClick() {
    setCurrentFilter("active");
  }

  function handleIsCompletedClick() {
    setCurrentFilter("completed");
  }

  let filteredTodos = [...todos];

  if (currentFilter === "active") {
    filteredTodos = todos.filter((todo) => {
      return !todo.isCompleted;
    });
  }

  if (currentFilter === "completed") {
    filteredTodos = todos.filter((todo) => {
      return todo.isCompleted;
    });
  }

  return (
    <div className="todos">
      <TodoList todos={filteredTodos} />
      <div className="todos__footer flex gap justify-between">
        <p className="todos__items-left">{todos.length} items left</p>
        <div className="flex gap">
          <Button
            className={`${currentFilter === "" ? "selected" : ""}`}
            onClick={handleAllClick}
          >
            All
          </Button>
          <Button
            className={`${currentFilter === "active" ? "selected" : ""}`}
            onClick={handleActiveClick}
          >
            Active
          </Button>
          <Button
            className={`${currentFilter === "completed" ? "selected" : ""}`}
            onClick={handleIsCompletedClick}
          >
            Completed
          </Button>
        </div>
        <Button onClick={onClearCompleted}>Clear Completed</Button>
      </div>
    </div>
  );
}

export default Todos;
