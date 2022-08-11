import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoDetail from "../components/TodoDetail";
import TodoList from "../components/TodoList";

import TodoGetApi from "../api/todo/TodoGetApi";
import ToDoDetailsApi from "../api/todo/TodoDetailsApi";

import { Todo } from "../types/todo";

export default function Detail() {
  let { curTodoId } = useParams<{ curTodoId: string }>();

  const [todos, setTods] = useState([]);
  const [detail, setDetail] = useState<Todo>();

  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState("");

  const [isTodoNull, setIsTodoNull] = useState(false);

  // todo를 가져오는 함수
  const getToDos = () => {
    TodoGetApi()
      .then((res) => {
        setTods(res.data);
      })
      .catch((error) => {
        alert(error.response.data["details"]);
      });
  };

  // todo를 눌러 상세보기를 보여주는 함수
  const getDetail = async (curTodoId: string | undefined) => {
    if (typeof curTodoId === "string") {
      ToDoDetailsApi(curTodoId)
        .then((res) => {
          reRender(res.data);
        })
        .catch((error) => {
          alert(error.response.data["details"]);
        });
    }
  };

  // 모든 내용을 재 설정하는 함수
  const reRender = (todo: Todo) => {
    setDetail(todo);
    setEditTitle(todo.title);
    setEditText(todo.content);
    setEditId(todo.id);
    setIsTodoNull(false);
  };

  useEffect(() => {
    getToDos();
    getDetail(curTodoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curTodoId]);

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
        <TodoList
          getToDos={getToDos}
          todos={todos}
          setIsTodoNull={setIsTodoNull}
        />
        <TodoDetail
          getToDos={getToDos}
          detail={detail}
          editTitle={editTitle}
          editText={editText}
          setEditTitle={setEditTitle}
          setEditText={setEditText}
          editId={editId}
          isTodoNull={isTodoNull}
          getDetail={getDetail}
        />
      </article>
    </main>
  );
}
