import { useContext } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TodosContext from "../../context/TodosContext.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import "./TodoList.css";

function TodoList({ todos }) {
  const { onDragEnd } = useContext(TodosContext);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    onDragEnd(active.id, over.id);
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
