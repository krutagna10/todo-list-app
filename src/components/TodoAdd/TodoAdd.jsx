import TodosContext from "../../context/TodosContext.jsx";
import { useContext, useState } from "react";
import "./TodoAdd.css";
import InputCheckbox from "../InputCheckbox/InputCheckbox.jsx";

function TodoAdd() {
  const { onAddTodo } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleIsCompletedChange(nextIsCompleted) {
    setIsCompleted(nextIsCompleted);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title, isCompleted);
    setTitle("");
  }

  return (
    <form className="form flex items-center gap-4" onSubmit={handleSubmit}>
      <InputCheckbox
        checked={false}
        onIsCompletedChange={handleIsCompletedChange}
      />
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
