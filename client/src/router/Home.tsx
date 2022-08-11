import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import TodoApi from "../api/todo/TodoGetApi";
import useGetTodos from "../hooks/useGetTodos";

export default function Home() {
  //const [todos, setTods] = useState([]);

  const [isReRender, setIsReRender] = useState(false);
  const todos = useGetTodos(isReRender);
  console.log(todos);

  return (
    <main
      style={{
        margin: "0 auto",
        width: "80%",
        textAlign: "center",
      }}
    >
      <Nav />
      <TodoForm isReRender={isReRender} setIsReRender={setIsReRender} />
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TodoList todos={todos} />
        <h2 style={{ width: "216px" }}>상세 정보</h2>
      </article>
    </main>
  );
}
