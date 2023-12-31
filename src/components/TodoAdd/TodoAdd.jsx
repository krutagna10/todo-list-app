import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import "./TodoAdd.css";

function TodoAdd() {
  const { onAddTodo } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleIsCompletedChange(event) {
    setIsCompleted(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title, isCompleted);
    setTitle("");
    setIsCompleted(false);
  }

  return (
    <div>
      <form className="form flex items-center gap" onSubmit={handleSubmit}>
        <Checkbox
          id={crypto.randomUUID()}
          checked={isCompleted}
          onChange={handleIsCompletedChange}
        />
        <input
          className="form__input fs-200"
          type="text"
          placeholder="Create a new todo..."
          onChange={handleTitleChange}
          value={title}
          required
        />
      </form>
    </div>
  );
}

export default TodoAdd;
