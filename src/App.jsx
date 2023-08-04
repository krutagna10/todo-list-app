import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodosProvider from "./context/TodosProvider.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <TodosProvider>
        <TodoAdd />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
