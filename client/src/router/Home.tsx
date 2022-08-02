import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";

import axios from "axios";

export default function Home() {
  let response;
  const token = localStorage.getItem("login-token");

  const [todos, setTods] = useState([]);
  const [detail, setDetail] = useState<any>();

  const [editTilte, setEditTilte] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState("");

  const [todoNull, setTodoNull] = useState(false);

  const getToDos = async () => {
    response = await axios.get(`http://localhost:8080/todos`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setTods(response.data.data);
  };

  const onLogOut = () => {
    localStorage.removeItem("login-token");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  const onDetail = async (id: string) => {
    const response = await axios.get(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const history = localStorage.getItem("history");
    if (history) {
      let arr = [...JSON.parse(history), response.data.data];
      localStorage.setItem("history", JSON.stringify(arr));
    } else {
      localStorage.setItem("history", JSON.stringify([response.data.data]));
    }

    setDetail(response.data.data);
    setEditTilte(response.data.data.title);
    setEditText(response.data.data.content);
    setEditId(response.data.data.id);
    setTodoNull(false);
  };

  const checkRefresh = () => {
    let curHistory;
    const history = localStorage.getItem("history");

    if (history) {
      console.log("history");
      curHistory = JSON.parse(history)[JSON.parse(history).length - 1];
      setEditTilte(curHistory.title);
      setEditText(curHistory.content);
      setEditId(curHistory.id);
    }
  };

  useEffect(() => {
    getToDos();
    checkRefresh();
  }, []);

  return (
    <main style={{ margin: "0 auto", width: "80%", textAlign: "center" }}>
      <nav>
        <Link to={`/auth`} style={{ marginRight: "10px" }}>
          로그인
        </Link>
        <button onClick={onLogOut}>로그아웃</button>
      </nav>

      <TodoForm getToDos={getToDos} />
      <article style={{ display: "flex", justifyContent: "space-around" }}>
        <TodoList
          getToDos={getToDos}
          onDetail={onDetail}
          todos={todos}
          setTodoNull={setTodoNull}
        />
        <TodoDetail
          getToDos={getToDos}
          detail={detail}
          editTilte={editTilte}
          editText={editText}
          setEditTilte={setEditTilte}
          setEditText={setEditText}
          onDetail={onDetail}
          editId={editId}
          todoNull={todoNull}
          setTodoNull={setTodoNull}
        />
      </article>
    </main>
  );
}
