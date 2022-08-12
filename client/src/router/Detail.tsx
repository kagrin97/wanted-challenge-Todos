import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoDetail from "../components/TodoDetail";
import TodoList from "../components/TodoList";

import useGetDetail from "../hooks/useGetDetail";

import useEditTodoStore from "../store/useEditTodoStore";
import useNullTodoStore from "../store/useNullTodoStore";
import useDetailTodoStore from "../store/useDetailTodoStore";

import { Todo } from "../types/todo";

export default function Detail() {
  let { curTodoId } = useParams<{ curTodoId: string }>();

  const { setEditTitle, setEditText, setEditId } = useEditTodoStore();
  const { setIsTodoNull } = useNullTodoStore();
  const { setDetail } = useDetailTodoStore();

  // todo를 눌러 상세보기를 보여주는 함수
  const getDetail = async (curTodoId: string | undefined) => {
    if (typeof curTodoId === "string") {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useGetDetail(curTodoId)
        .then((todo) => {
          reRender(todo);
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
      <TodoForm />
      <article style={{ display: "flex", justifyContent: "space-around" }}>
        <TodoList />
        <TodoDetail getDetail={getDetail} />
      </article>
    </main>
  );
}
