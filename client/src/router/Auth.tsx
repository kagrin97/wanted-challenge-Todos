import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "../components/AuthForm";

export default function Auth() {
  const tokenRegex = /[a-zA-Z0-9]+\.[a-zA-Z0-9]+\..+/gm;
  const navigate = useNavigate();

  const checkToken = () => {
    const token = localStorage.getItem("login-token");
    if (token) {
      if (!tokenRegex.test(token)) {
        alert("토큰이 유효하지 않습니다.");
        navigate("/");
      } else {
        console.log(token);
        alert("유효한 토큰이 존재해 로그인 되었습니다.");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <Link to={`/`}>홈페이지</Link>
      <AuthForm />
    </>
  );
}
