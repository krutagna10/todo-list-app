import TodosContext from "../../context/TodosContext.jsx";
import { useContext, useState } from "react";
import "./TodoAdd.css";

function TodoAdd() {
  const { onAddTodo } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleIsCompletedChange(event) {
    console.log("Todo checkbox of TodoAdd.js has been edited");
    setIsCompleted(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title, isCompleted);
    setTitle("");
    setIsCompleted(false);
  }

  return (
    <form className="form flex items-center gap-4" onSubmit={handleSubmit}>
      <div className="checkbox">
        <input
          type="checkbox"
          id="checkbox__input-form"
          className="checkbox__input"
          onChange={handleIsCompletedChange}
          checked={isCompleted === true}
        />
        <label htmlFor="checkbox__input-form" className="checkbox__label" />
      </div>
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
