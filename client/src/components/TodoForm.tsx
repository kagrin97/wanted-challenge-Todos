import React, { useState } from "react";

import axios from "axios";

export default function TodoForm({ getToDos }: any) {
  const token = localStorage.getItem("login-token");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/todos`,
      {
        title: title,
        content: text,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    getToDos();
    setTitle("");
    setText("");
  };

  return (
    <>
      <h3>추가하고싶은 todo를 입력해주세요</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={onChangeTitle}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          value={text}
          placeholder="내용"
          onChange={onChangeText}
          style={{ marginRight: "10px" }}
        />
        <input type="submit" value="추가" />
      </form>
    </>
  );
}
