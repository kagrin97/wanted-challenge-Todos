import React, { useState } from "react";

import axios from "axios";

export default function TodoDetail({
  detail,
  getToDos,
  editTilte,
  editText,
  onDetail,
  setEditTilte,
  setEditText,
  editId,
  todoNull,
}: any) {
  const token = localStorage.getItem("login-token");

  const [editing, setEditing] = useState(false);

  const toggleEditing = () => setEditing(!editing);

  const onCancel = () => {
    setEditTilte(detail.title);
    setEditText(detail.content);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTilte(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/todos/${editId}`,
      {
        title: editTilte,
        content: editText,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setEditing(false);
    getToDos();
    onDetail(editId);
  };

  const history = localStorage.getItem("history");
  let curHistory;
  if (history) {
    curHistory = JSON.parse(history)[JSON.parse(history).length - 1];
  }

  return (
    <article>
      {todoNull ? (
        <section>
          <h2>상세 정보</h2>
          <p>존재하지 않는 todo입니다.</p>
        </section>
      ) : editing ? (
        <section>
          <h2>수정 하기</h2>
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              value={editTilte}
              placeholder="제목"
              onChange={onChangeTitle}
              style={{ marginBottom: "10px", padding: "3px 10px" }}
            />
            <input
              type="text"
              value={editText}
              placeholder="내용"
              onChange={onChangeText}
              style={{ marginBottom: "10px", padding: "3px 10px" }}
            />
            <input
              type="submit"
              value="수정"
              style={{ marginBottom: "10px" }}
            />
            <button onClick={onCancel}>취소</button>
          </form>
        </section>
      ) : (
        <section>
          <h2>상세 정보</h2>
          {detail ? (
            <div key={detail.id}>
              <h3>제목: {detail.title}</h3>
              <p>내용: {detail.content}</p>
              <p>만들어진 날짜: {detail.createdAt.slice(0, 10)}</p>
              <p>최근 수정된 날짜: {detail.updatedAt.slice(0, 10)}</p>
              <button onClick={toggleEditing}>수정</button>
            </div>
          ) : curHistory ? (
            <div key={curHistory.id}>
              <h3>제목: {curHistory.title}</h3>
              <p>내용: {curHistory.content}</p>
              <p>만들어진 날짜: {curHistory.createdAt.slice(0, 10)}</p>
              <p>최근 수정된 날짜: {curHistory.updatedAt.slice(0, 10)}</p>
              <button onClick={toggleEditing}>수정</button>
            </div>
          ) : (
            ""
          )}
        </section>
      )}
    </article>
  );
}
