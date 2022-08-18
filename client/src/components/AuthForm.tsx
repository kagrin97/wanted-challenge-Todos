import React, { useState, useEffect } from "react";

import useSignUp from "hooks/auth/useSignUp";
import useLogIn from "hooks/auth/useLogIn";

import useErrorStore from "store/useErrorStore";

import { Paper, TextField, ButtonGroup, Button } from "@mui/material";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkInput, setCheckInput] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const { isError, errorText } = useErrorStore();

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

  const signUpMutation = useSignUp(email, password);
  const logInMutation = useLogIn(email, password);

  // 회원가입과 로그인을 위한 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newAccount) {
      signUpMutation.mutate({ email, password });
    } else {
      logInMutation.mutate({ email, password });
    }
  };

  useEffect(() => {
    validateInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <Paper elevation={3} sx={{ mt: "1rem", py: "6rem", borderRadius: 3 }}>
      <h1>회원가입 or 로그인</h1>
      <form onSubmit={onSubmit}>
        <section style={{ marginBottom: "0.625rem" }}>
          <TextField value={email} onChange={onChangeEmail} label="이메일" />
        </section>
        <section>
          <TextField
            value={password}
            onChange={onChangePassword}
            label="비밀번호"
            type="password"
          />
        </section>
        <section
          style={{
            margin: "10px 0",
          }}
        >
          {/* 이메일과 패스워드가 유효한지 확인 후 버튼을 누를 수 있습니다. */}
          <ButtonGroup
            disabled={!checkInput}
            variant="outlined"
            aria-label="text button group"
          >
            <Button type="submit" onClick={onAccount}>
              회원가입
            </Button>
            <Button type="submit" onClick={onLogIn}>
              로그인
            </Button>
          </ButtonGroup>
        </section>
      </form>
      {isError ? <span style={{ color: "red" }}>{errorText}</span> : ""}
    </Paper>
  );
}
