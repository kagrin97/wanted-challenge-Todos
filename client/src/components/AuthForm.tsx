import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkId, setCheckId] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
    if (password.length >= 8 && emailRegex.test(email)) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;

    if (newAccount) {
      response = await axios.post(`http://localhost:8080/users/create`, {
        email: email,
        password: password,
      });
    } else {
      response = await axios.post(`http://localhost:8080/users/login`, {
        email: email,
        password: password,
      });
    }

    if (response.data.token) {
      localStorage.setItem("login-token", response.data.token);
      console.log(response.data.token);
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
    <>
      <h1>회원가입 or 로그인</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
        />
        {checkId ? (
          <input type="submit" onClick={onAccount} value="회원가입" />
        ) : (
          "회원가입"
        )}
        {checkId ? (
          <input type="submit" onClick={onLogIn} value="로그인" />
        ) : (
          "로그인"
        )}
      </form>
    </>
  );
}
