import React, { useState } from "react";

import axios from "axios";

export default function TodoForm({ getToDos }: any) {
  const token = localStorage.getItem("login-token");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // todo를 생성하는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
    } catch (error: any) {
      alert(error.response.data["details"]);
    }

    setTitle("");
    setText("");
    getToDos();
  };

  return (
    <article>
      <h3>추가하고싶은 todo를 입력해주세요</h3>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={onChangeTitle}
        />
        <textarea
          rows={3}
          value={text}
          placeholder="텍스트 입력..."
          onChange={onChangeText}
          style={{ margin: "10px 0" }}
        />
        <input type="submit" value="추가" />
      </form>
    </article>
  );
}
