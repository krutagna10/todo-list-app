import TodosContext from "../../context/TodosContext.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import { useContext } from "react";
import "./TodoList.css";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
