import Nav from "components/Nav";
import TodoForm from "components/TodoForm";
import TodoList from "components/TodoList";

import styled from "styled-components";

const Article = styled.article`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
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
      <Article
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TodoList />
        <h2 style={{ width: "16.313rem" }}>상세 정보</h2>
      </Article>
    </main>
  );
}
