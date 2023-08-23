import "./Button.css";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`btn text-100 ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
