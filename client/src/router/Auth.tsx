import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "components/AuthForm";

import validator from "validator";

import HomeIcon from "@mui/icons-material/Home";

export default function Auth() {
  const navigate = useNavigate();

  // localStorage에 저장된 토큰의 유효성을 검사하는 함수
  const checkToken = () => {
    const token = localStorage.getItem("login-token");
    if (token && validator.isJWT(token)) {
      alert("유효한 토큰이 존재해 로그인 되었습니다.");
      navigate("/");
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ margin: "0 auto", width: "80%", textAlign: "center" }}>
      <Link to={`/`}>
        <HomeIcon fontSize="large" color="primary" />
      </Link>
      <AuthForm />
    </main>
  );
}
