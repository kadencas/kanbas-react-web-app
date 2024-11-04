import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: string;
  title: string;
}

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center col-3">
      {todo.title}
      <div>
        <button onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click" className="btn btn-danger me-1">Delete</button>
        <button onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click" className="btn btn-primary ms-1" > Edit </button>
      </div>
    </li>
  );
}
