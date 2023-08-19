import "./Checkbox.css";

function Checkbox({ id, checked, onChange }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={`checkbox__input-${id}`}
        className={`checkbox__input`}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={`checkbox__input-${id}`} className="checkbox__label" />
    </div>
  );
}

export default Checkbox;
