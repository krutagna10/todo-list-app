import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import Button from "../UI/Button/Button.jsx";
import "./TodosFilterMobile.css";
import FilterButtons from "../FilterButtons/FilterButtons.jsx";

function TodosFilterMobile({
  currentFilter,
  onShowAllClick,
  onShowActiveClick,
  onShowCompletedClick,
}) {
  const { todos, onClearCompleted } = useContext(TodosContext);

  return (
    <div className="todos__filter-mobile">
      <div className="flex justify-between">
        <p className="todos__items-left text-100">{todos.length} items left</p>
        <Button onClick={onClearCompleted}>Clear Completed</Button>
      </div>
      <div className="flex justify-center gap-100">
        <FilterButtons
          currentFilter={currentFilter}
          onShowAllClick={onShowAllClick}
          onShowActiveClick={onShowActiveClick}
          onShowCompletedClick={onShowCompletedClick}
        />
      </div>
    </div>
  );
}

export default TodosFilterMobile;
