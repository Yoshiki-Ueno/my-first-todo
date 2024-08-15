// src/components/TodoList.tsx
import React from "react";
import { MdDelete } from "react-icons/md";

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="bg-white p-2 mt-2 flex">
          <div>・{todo}</div>
          <button className="ml-2" onClick={() => onDelete(index)}>
            <MdDelete color="red" />
          </button>
        </li>
      ))}
    </ul>
  );
};

// default exportを追加
export default TodoList;
