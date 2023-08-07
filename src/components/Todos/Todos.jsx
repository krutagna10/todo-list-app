import TodoList from "../TodoList/TodoList.jsx";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import "./Todos.css";
import Button from "../UI/Button/Button.jsx";

function Todos() {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todos">
      <TodoList />
      <div className="todos__footer flex gap-6 justify-between">
        <p>{todos.length} items left</p>
        <div className="flex gap-2">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </div>
        <Button>Clear Completed</Button>
      </div>
    </div>
  );
}

export default Todos;
