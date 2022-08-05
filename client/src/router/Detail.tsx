import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoDetail from "../components/TodoDetail";
import TodoList from "../components/TodoList";

import axios from "axios";

export default function Detail() {
  let { id }: any = useParams();

  const token = localStorage.getItem("login-token");

  const [todos, setTods] = useState([]);
  const [detail, setDetail] = useState<any>();

  const [editTilte, setEditTilte] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState("");

  const [todoNull, setTodoNull] = useState(false);

  // todo를 가져오는 함수
  const getToDos = async () => {
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

  // todo를 눌러 상세보기를 보여주는 함수
  const getDetail = async (id: any) => {
    let response: any;
    try {
      response = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error: any) {
      alert(error.response.data["details"]);
    }

    // 상세보기창과 수정 창의 제목, 내용을 재 할당하는 hook
    setDetail(response.data.data);
    setEditTilte(response.data.data.title);
    setEditText(response.data.data.content);
    setEditId(response.data.data.id);
    setTodoNull(false);
  };

  useEffect(() => {
    getToDos();
    getDetail(id);
  }, [id]);

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
      <article style={{ display: "flex", justifyContent: "space-around" }}>
        <TodoList getToDos={getToDos} todos={todos} setTodoNull={setTodoNull} />
        <TodoDetail
          getToDos={getToDos}
          detail={detail}
          editTilte={editTilte}
          editText={editText}
          setEditTilte={setEditTilte}
          setEditText={setEditText}
          editId={editId}
          todoNull={todoNull}
          setTodoNull={setTodoNull}
          getDetail={getDetail}
        />
      </article>
    </main>
  );
}
