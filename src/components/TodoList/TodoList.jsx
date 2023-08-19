import TodosContext from "../../context/TodosContext.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import { useContext } from "react";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <ul className="todo__list">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
