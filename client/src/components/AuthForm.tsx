import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthApi from "../api/auth/AuthApi";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkInput, setCheckInput] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onAccount = () => {
    setNewAccount(true);
  };

  const onLogIn = () => {
    setNewAccount(false);
  };

  // 이메일과 패스워드가 유효한지 확인하는
  const validateInput = () => {
    const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;

    if (emailRegex.test(email) && password.length >= 7) {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  };

  // 회원가입과 로그인을 위한 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthApi(newAccount, email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.response.data["details"]));
  };

  useEffect(() => {
    validateInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <article>
      <h1>회원가입 or 로그인</h1>
      <form onSubmit={onSubmit}>
        <section>
          <label htmlFor="email">이메일 : </label>
          <input
            type="email"
            id="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
            style={{ marginBottom: "10px", marginLeft: "14px" }}
          />
        </section>

        <section>
          <label htmlFor="password">비밀번호 : </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
        </section>

        <section
          style={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-evenly",
          }}
        >
          {/* 이메일과 패스워드가 유효한지 확인 후 버튼을 누를 수 있습니다. */}
          {checkInput ? (
            <input type="submit" onClick={onAccount} value="회원가입" />
          ) : (
            <p>회원가입</p>
          )}
          {checkInput ? (
            <input type="submit" onClick={onLogIn} value="로그인" />
          ) : (
            <p>로그인</p>
          )}
        </section>
      </form>
    </article>
  );
}
