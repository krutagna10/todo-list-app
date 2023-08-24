import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodosProvider from "./context/TodosProvider.jsx";
import Todos from "./components/Todos/Todos.jsx";
import Header from "./components/Header/Header.jsx";
import { useEffect, useState } from "react";

function App() {
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
    <div className="app">
      <TodosProvider>
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <TodoAdd />
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
