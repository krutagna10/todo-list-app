import lightThemeIcon from "../../assets/icon-sun.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header flex justify-between items-center">
      <h1 className="header__heading">TODO</h1>
      <button className="header__btn">
        <img src={lightThemeIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;
