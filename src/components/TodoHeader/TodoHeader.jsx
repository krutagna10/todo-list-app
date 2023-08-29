import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";
import "./TodoHeader.css";
import { useEffect, useState } from "react";

function TodoHeader() {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === "light-theme" ? "dark-theme" : "light-theme";
    });
  }

  return (
    <header className="header">
      <div className="flex justify-between items-center">
        <h1 className="header__title fs-300">TODO</h1>
        <button
          className="header__btn"
          onClick={handleToggleTheme}
          aria-label="Toggle Theme"
        >
          <img
            className="header__icon"
            src={theme === "light-theme" ? iconMoon : iconSun}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}

export default TodoHeader;
