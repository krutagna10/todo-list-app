import TodoHeader from "../../components/TodoHeader/TodoHeader.jsx";
import TodoAdd from "../../components/TodoAdd/TodoAdd.jsx";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Container from "../../components/UI/Container/Container.jsx";
import TodosSummary from "../../components/TodosSummary/TodosSummary.jsx";
import TodosNav from "../../components/TodosNav/TodosNav.jsx";

function Home() {
  return (
    <main>
      <section className="todo-app-section flow">
        <Container className="todo-app flow">
          <TodoHeader />
          <TodoAdd />
          <div>
            <Outlet />
            <TodosSummary />
          </div>
          <TodosNav />
          <p className="text-center">Drag and drop to reorder list</p>
        </Container>
      </section>
    </main>
  );
}

export default Home;
