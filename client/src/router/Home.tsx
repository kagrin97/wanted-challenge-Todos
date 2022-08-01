import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TodoForm from "../components/TodoForm";

import axios from "axios";

export default function Home() {
  let response;
  const token = localStorage.getItem("login-token");

  const [todos, setTods] = useState([]);
  const getToDos = async () => {
    response = await axios.get(`http://localhost:8080/todos`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setTods(response.data.data);
    console.log(response.data.data);
  };

  const onDetail = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <Link to={`/auth`}>로그인</Link>
      <TodoForm getToDos={getToDos} />
      <article style={{ display: "flex" }}>
        <div style={{ marginRight: "2rem" }}>
          <h2>할 일 리스트</h2>
          {todos.map((todo: any) => (
            <div onClick={() => onDetail(todo.id)} key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>할 일 상세 정보</h2>
        </div>
      </article>
    </>
  );
}
