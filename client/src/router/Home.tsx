import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import ToDoAxios from "../api/getTodo";

export default function Home() {
  const [todos, setTods] = useState([]);

  // todo를 가져오는 함수
  const getToDos = () => {
    ToDoAxios().then((res) => {
      setTods(res.data);
    });
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <main
      style={{
        margin: "0 auto",
        width: "80%",
        textAlign: "center",
      }}
    >
      <Nav />
      <TodoForm getToDos={getToDos} />
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TodoList getToDos={getToDos} todos={todos} />
        <h2 style={{ width: "216px" }}>상세 정보</h2>
      </article>
    </main>
  );
}
