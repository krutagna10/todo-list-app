import TodosContext from "../../context/TodosContext.jsx";
import { useContext, useState } from "react";
import "./TodoAdd.css";

function TodoAdd() {
  const { onAddTodo } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title);
    setTitle("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input
        className="form__input"
        type="text"
        placeholder="Create a new todo..."
        onChange={handleTitleChange}
        value={title}
        required
      />
    </form>
  );
}

export default TodoAdd;
