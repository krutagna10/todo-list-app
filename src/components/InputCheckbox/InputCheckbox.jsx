import { useState } from "react";
import "./InputCheckbox.css";

function InputCheckbox({ checked, onIsCompletedChange }) {
  const [isCompleted, setIsCompleted] = useState(checked);

  function handleIsCompletedChange(event) {
    setIsCompleted(event.target.checked);
    onIsCompletedChange(event.target.checked);
  }

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id="checkbox__input"
        className="checkbox__input"
        onChange={handleIsCompletedChange}
        checked={isCompleted}
      />
      <label htmlFor="checkbox__input" className="checkbox__label" />
    </div>
  );
}

export default InputCheckbox;
