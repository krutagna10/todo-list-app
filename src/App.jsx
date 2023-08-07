import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodosProvider from "./context/TodosProvider.jsx";
import Todos from "./components/Todos/Todos.jsx";

function App() {
  return (
    <div className="app">
      <TodosProvider>
        <TodoAdd />
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
