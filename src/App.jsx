import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodosProvider from "./context/TodosProvider.jsx";
import Todos from "./components/Todos/Todos.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="app">
      <TodosProvider>
        <Header />
        <TodoAdd />
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
