import React, { useState } from "react";

import useAddTodo from "hooks/todo/useAddTodo";

import { TextField, Button } from "@mui/material";

/**
 * 새로운 todo를 추가하는 컴포넌트
 */
export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodoMutation = useAddTodo({ title, text });

  // todo를 생성하는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoMutation.mutate({ title, text });
    emptyForm();
  };

  // form을 초기화하는 함수
  const emptyForm = () => {
    setTitle("");
    setText("");
  };

  return (
    <article>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          maxWidth: "18.750rem",
          margin: "0 auto",
        }}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="제목"
          multiline
          maxRows={4}
          value={title}
          onChange={onChangeTitle}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="텍스트 입력..."
          multiline
          maxRows={4}
          value={text}
          onChange={onChangeText}
          sx={{ my: "1rem" }}
        />
        <Button type="submit" variant="contained">
          추가
        </Button>
      </form>
    </article>
  );
}
