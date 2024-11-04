import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center col-3">
      <input
        defaultValue={todo.title}
        className="form-control w-50"
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
      <div>
        <button onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click" className="btn btn-success me-1"> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click" className="btn btn-warning"> Update </button>
      </div>
    </li>
  );
}

