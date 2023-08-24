import Button from "../UI/Button/Button.jsx";
import "./TodosFilter.css";

function TodosFilter({
  currentFilter,
  onShowAllClick,
  onShowActiveClick,
  onShowCompletedClick,
}) {
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
    <div className="todos__filter flex justify-center gap-200">
      {filters.map((filter, index) => (
        <Button
          key={index}
          className={`${currentFilter === filter.status ? "selected" : ""}`}
          onClick={filter.onClick}
        >
          {filter.text}
        </Button>
      ))}
    </div>
  );
}

export default TodosFilter;
