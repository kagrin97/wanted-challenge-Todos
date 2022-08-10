import React, { useState } from "react";

import TodoAddAxios from "../api/addTodo";

interface TodoFormProps {
  getToDos: () => void;
}

export default function TodoForm({ getToDos }: TodoFormProps) {
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
    TodoAddAxios(title, text).then();
    emptyForm();
  };

  // form을 초기화하는 함수
  const emptyForm = () => {
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
