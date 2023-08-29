import TodoList from "../TodoList/TodoList.jsx";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function AllTodos() {
  const { todos } = useContext(TodosContext);
  return <TodoList todos={todos} />;
}

export default AllTodos;
