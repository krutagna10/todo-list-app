import Button from "../UI/Button/Button.jsx";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./TodosFilterDesktop.css";
import FilterButtons from "../FilterButtons/FilterButtons.jsx";

function TodosFilterDesktop({
  currentFilter,
  onShowAllClick,
  onShowActiveClick,
  onShowCompletedClick,
}) {
  const { todos, onClearCompleted } = useContext(TodosContext);

  const filters = [
    {
      status: "",
      onClick: onShowAllClick,
      text: "All",
    },
    {
      status: "active",
      onClick: onShowActiveClick,
      text: "Active",
    },
    {
      status: "completed",
      onClick: onShowCompletedClick,
      text: "Completed",
    },
  ];

  return (
    <div className="todos__filter-desktop flex gap-100 justify-between">
      <p className="todos__items-left text-100">{todos.length} items left</p>
      <div className="flex gap-100">
        <FilterButtons
          currentFilter={currentFilter}
          onShowAllClick={onShowAllClick}
          onShowActiveClick={onShowActiveClick}
          onShowCompletedClick={onShowCompletedClick}
        />
      </div>
      <Button onClick={onClearCompleted}>Clear Completed</Button>
    </div>
  );
}

export default TodosFilterDesktop;
