import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import axios from "axios";

export default function Home() {
  const [todos, setTods] = useState([]);

  // todo를 가져오는 함수
  const getToDos = async () => {
    const token = localStorage.getItem("login-token");
    let response: any;

    try {
      response = await axios.get(`http://localhost:8080/todos`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error: any) {
      alert(error.response.data["details"]);
    }
    setTods(response.data.data);
  };

  useEffect(() => {
    getToDos();
  });

  return (
    <main
      style={{
        margin: "0 auto",
        width: "80%",
        textAlign: "center",
      }}
    >
      <Nav />
      <TodoForm />
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
