import TodosContext from "../../context/TodosContext.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import { useContext } from "react";
import "./TodoList.css";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({ todos }) {
  const { todos: originalTodos, onDragEnd } = useContext(TodosContext);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    const activeIndex = originalTodos.findIndex(
      (todo) => todo.id === active.id,
    );
    const overIndex = originalTodos.findIndex((todo) => todo.id === over.id);
    onDragEnd(activeIndex, overIndex);
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        <ul className="todos__list">
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} id={todo.id} todo={todo} index={index} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

export default TodoList;
