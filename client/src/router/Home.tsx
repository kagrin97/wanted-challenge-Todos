import { useState } from "react";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import useGetTodos from "../hooks/useGetTodos";

export default function Home() {
  const [isReRender, setIsReRender] = useState(false);
  const todos = useGetTodos(isReRender);

  return (
    <main
      style={{
        margin: "0 auto",
        width: "80%",
        textAlign: "center",
      }}
    >
      <Nav />
      <TodoForm setIsReRender={setIsReRender} />
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TodoList setIsReRender={setIsReRender} todos={todos} />
        <h2 style={{ width: "216px" }}>상세 정보</h2>
      </article>
    </main>
  );
}
