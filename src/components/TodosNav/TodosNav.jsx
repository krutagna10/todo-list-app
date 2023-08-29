import "./TodosNav.css";
import { NavLink } from "react-router-dom";

function TodosNav() {
  const links = [
    {
      to: "/",
      text: "All",
    },
    {
      to: "/active",
      text: "Active",
    },
    {
      to: "/completed",
      text: "Completed",
    },
  ];

  return (
    <nav className="todos__nav">
      <ul className="todos__nav-list flex justify-center gap">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink className="todos__nav-link" key={index} to={link.to}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TodosNav;
