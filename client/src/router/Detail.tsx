import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Nav from "components/Nav";
import TodoForm from "components/TodoForm";
import TodoDetail from "components/TodoDetail";
import TodoList from "components/TodoList";

import useGetWidthStore from "store/useGetWidthStore";

import validator from "validator";

export default function Detail() {
  let { curTodoId } = useParams<{ curTodoId: string }>();

  const navigate = useNavigate();

  const { windowSize, setWindowSize } = useGetWidthStore();

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  // localStorage에 저장된 토큰의 유효성을 검사하는 함수
  const checkToken = () => {
    const token = localStorage.getItem("login-token");
    if (!token || !validator.isJWT(token)) {
      alert("토큰이 유효하지 않거나 로그인 되어있지 않습니다.");
      navigate("/auth");
    }
  };

  useEffect(() => {
    checkToken();
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
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
        {windowSize >= 690 && <TodoDetail />}
      </article>
    </main>
  );
}
