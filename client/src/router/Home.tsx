import Nav from "../components/Nav";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

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
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TodoList />
        <h2 style={{ width: "216px" }}>상세 정보</h2>
      </article>
    </main>
  );
}
