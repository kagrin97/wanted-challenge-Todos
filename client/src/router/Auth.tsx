import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "components/AuthForm";

import validator from "validator";

export default function Auth() {
  const navigate = useNavigate();

  // localStorage에 저장된 토큰의 유효성을 검사하는 함수
  const checkToken = () => {
    const token = localStorage.getItem("login-token");
    if (token) {
      if (!validator.isJWT(token)) {
        alert("토큰이 유효하지 않습니다.");
        navigate("/");
      } else {
        alert("유효한 토큰이 존재해 로그인 되었습니다.");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ margin: "0 auto", width: "80%", textAlign: "center" }}>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        홈으로
      </Link>
      <AuthForm />
    </main>
  );
}
