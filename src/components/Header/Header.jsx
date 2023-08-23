import lightThemeIcon from "../../assets/icon-sun.svg";
import "./Header.css";
import Container from "../UI/Container/Container.jsx";

function Header() {
  return (
    <header>
      <Container className="header__container flex justify-between items-center">
        <h1 className="header__heading text-300">TODO</h1>
        <button className="header__btn">
          <img src={lightThemeIcon} alt="" />
        </button>
      </Container>
    </header>
  );
}

export default Header;
