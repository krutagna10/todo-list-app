import TodoList from "../TodoList/TodoList.jsx";
import { useContext, useReducer, useState, useSyncExternalStore } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./Todos.css";
import Button from "../UI/Button/Button.jsx";
import Container from "../UI/Container/Container.jsx";
import TodosFilterMobile from "../TodosFilterMobile/TodosFilterMobile.jsx";
import TodosFilterDesktop from "../TodosFilterDesktop/TodosFilterDesktop.jsx";

const INITIAL_STATE = {
  filter: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "set-filter-all": {
      return { filter: "" };
    }
    case "set-filter-active": {
      return { filter: "active" };
    }
    case "set-filter-completed": {
      return { filter: "completed" };
    }
    default: {
      throw new Error("Invalid action");
    }
  }
}

function Todos() {
  const { todos } = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleShowAllClick() {
    dispatch({ type: "set-filter-all" });
  }

  function handleShowActiveClick() {
    console.log("clicked");
    dispatch({ type: "set-filter-active" });
  }

  function handleShowCompletedClick() {
    dispatch({ type: "set-filter-completed" });
  }

  let filteredTodos = [...todos];
  let currentFilter = state.filter;

  console.log(currentFilter);

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

  const props = {
    currentFilter: state.filter,
    onShowAllClick: handleShowAllClick,
    onShowActiveClick: handleShowActiveClick,
    onShowCompletedClick: handleShowCompletedClick,
  };

  return (
    <Container className="todos">
      <TodoList todos={filteredTodos} />
      <TodosFilterDesktop {...props} />
      <TodosFilterMobile {...props} />
    </Container>
  );
}

export default Todos;
