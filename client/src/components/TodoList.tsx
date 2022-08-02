import React from "react";

import axios from "axios";

export default function TodoList({
  getToDos,
  onDetail,
  todos,
  setTodoNull,
}: any) {
  const token = localStorage.getItem("login-token");

  const onDelete = async (id: string) => {
    await axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const history = localStorage.getItem("history");
    if (history) {
      let arr = JSON.parse(history).filter((todo: any) => todo.id !== id);
      localStorage.setItem("history", JSON.stringify(arr));
    }

    setTodoNull(true);
    getToDos();
  };
  return (
    <div>
      <h2>리스트</h2>
      {todos.map((todo: any) => (
        <div
          onClick={() => onDetail(todo.id)}
          key={todo.id}
          style={{ display: "flex" }}
        >
          <h3>{todo.title}</h3>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              border: "0",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
