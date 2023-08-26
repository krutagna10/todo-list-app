import Container from "../UI/Container/Container.jsx";
import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";
import "./Header.css";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <Container className="flex justify-between items-center">
        <h1 className="header__title fs-300">TODO</h1>
        <button className="header__btn" onClick={onToggleTheme}>
          <img
            className="header__icon"
            src={theme === "light-theme" ? iconMoon : iconSun}
            alt=""
          />
        </button>
      </Container>
    </header>
  );
}

export default Header;
