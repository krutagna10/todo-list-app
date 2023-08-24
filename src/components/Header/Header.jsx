import { IonIcon } from "@ionic/react";
import { moonOutline, sunnyOutline } from "ionicons/icons";
import Container from "../UI/Container/Container.jsx";
import "./Header.css";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <Container className="header__container flex justify-between items-center">
        <h1 className="header__title text-300">TODO</h1>
        <button className="header__btn" onClick={onToggleTheme}>
          <IonIcon
            className="header__icon"
            icon={theme === "light-theme" ? moonOutline : sunnyOutline}
          />
        </button>
      </Container>
    </header>
  );
}

export default Header;
