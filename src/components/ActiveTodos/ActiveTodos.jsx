import TodoList from "../TodoList/TodoList.jsx";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function ActiveTodos() {
  const { todos } = useContext(TodosContext);
  const filteredTodos = todos.filter((todo) => !todo.isCompleted);

  return <TodoList todos={filteredTodos} />;
}

export default ActiveTodos;
