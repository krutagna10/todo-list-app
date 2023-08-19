import TodoList from "../TodoList/TodoList.jsx";
import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./Todos.css";
import Button from "../UI/Button/Button.jsx";

function Todos() {
  const { todos } = useContext(TodosContext);
  const [filterBy, setFilterBy] = useState("");

  function handleAllClick() {
    setFilterBy("");
  }

  function handleActiveClick() {
    setFilterBy("active");
  }

  function handleIsCompletedClick() {
    setFilterBy("completed");
  }

  let filteredTodos = [...todos];

  if (filterBy === "active") {
    filteredTodos = todos.filter((todo) => {
      return !todo.isCompleted;
    });
  }

  if (filterBy === "completed") {
    filteredTodos = todos.filter((todo) => {
      return todo.isCompleted;
    });
  }

  return (
    <div className="todos">
      <TodoList todos={filteredTodos} />
      <div className="todos__footer flex gap-6 justify-between">
        <p>{todos.length} items left</p>
        <div className="flex gap-2">
          <Button
            className={`${filterBy === "" ? "active" : ""}`}
            onClick={handleAllClick}
          >
            All
          </Button>
          <Button
            className={`${filterBy === "active" ? "active" : ""}`}
            onClick={handleActiveClick}
          >
            Active
          </Button>
          <Button
            className={`${filterBy === "completed" ? "active" : ""}`}
            onClick={handleIsCompletedClick}
          >
            Completed
          </Button>
        </div>
        <Button>Clear Completed</Button>
      </div>
    </div>
  );
}

export default Todos;
