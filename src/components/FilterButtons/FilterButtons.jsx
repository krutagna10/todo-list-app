import Button from "../UI/Button/Button.jsx";

function FilterButtons({
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

  return filters.map((filter, index) => (
    <Button
      key={index}
      className={`${currentFilter === filter.status ? "selected" : ""}`}
      onClick={filter.onClick}
    >
      {filter.text}
    </Button>
  ));
}

export default FilterButtons;
