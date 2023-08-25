import "./Button.css";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`btn fs-100 ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
