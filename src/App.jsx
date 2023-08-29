import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosProvider from "./context/TodosProvider.jsx";
import Home from "./pages/Home/Home.jsx";
import AllTodos from "./components/AllTodos/AllTodos.jsx";
import ActiveTodos from "./components/ActiveTodos/ActiveTodos.jsx";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos.jsx";

function App() {
  return (
    <TodosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTodos />} />
            <Route path="/active" element={<ActiveTodos />} />
            <Route path="/completed" element={<CompletedTodos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodosProvider>
  );
}

export default App;
