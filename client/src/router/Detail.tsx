import { useParams } from "react-router-dom";

import Nav from "components/Nav";
import TodoForm from "components/TodoForm";
import TodoDetail from "components/TodoDetail";
import TodoList from "components/TodoList";

import useGetDetail from "hooks/todo/useGetDetail";

import styled from "styled-components";

const Article = styled.article`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
      <Article>
        <TodoList />
        <TodoDetail />
      </Article>
    </main>
  );
}
