import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkId, setCheckId] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  // 이메일을 체크하는 정규표현식
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }

    // 이메일과 패스워드가 유효한지 확인하는 조건문
    if (password.length >= 7 && emailRegex.test(email)) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }
  };

  // 회원가입과 로그인을 위한 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;

    // 회원 가입
    if (newAccount) {
      response = await axios.post(`http://localhost:8080/users/create`, {
        email: email,
        password: password,
      });
    }
    // 로그인
    else {
      response = await axios.post(`http://localhost:8080/users/login`, {
        email: email,
        password: password,
      });
    }

    if (response.data.token) {
      localStorage.setItem("login-token", response.data.token);
    }

    navigate("/");
  };

  const onAccount = () => {
    setNewAccount(true);
  };
  const onLogIn = () => {
    setNewAccount(false);
  };

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
            onChange={onChange}
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
            onChange={onChange}
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
          {checkId ? (
            <input type="submit" onClick={onAccount} value="회원가입" />
          ) : (
            <p>회원가입</p>
          )}
          {checkId ? (
            <input type="submit" onClick={onLogIn} value="로그인" />
          ) : (
            <p>로그인</p>
          )}
        </section>
      </form>
    </article>
  );
}
