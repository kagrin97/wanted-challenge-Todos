import { useParams } from "react-router-dom";

import Nav from "components/Nav";
import TodoForm from "components/TodoForm";
import TodoDetail from "components/TodoDetail";
import TodoList from "components/TodoList";

import useGetDetail from "hooks/todo/useGetDetail";

export default function Detail() {
  let { curTodoId } = useParams<{ curTodoId: string }>();
  useGetDetail(curTodoId);

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
        <TodoDetail />
      </article>
    </main>
  );
}
