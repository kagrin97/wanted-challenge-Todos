import React, { useState, Dispatch, SetStateAction } from "react";

import TodoUpdateApi from "../api/todo/TodoUpdateApi";

import { Todo } from "../types/todo";

interface TodoDetailProps {
  getToDos: () => void;
  detail?: Todo;
  editTitle: string;
  editText: string;
  setEditTitle: Dispatch<SetStateAction<string>>;
  setEditText: Dispatch<SetStateAction<string>>;
  editId: string;
  isTodoNull: boolean;
  getDetail: (curTodoId: string | undefined) => void;
}

export default function TodoDetail({
  getToDos,
  detail,
  editTitle,
  editText,
  setEditTitle,
  setEditText,
  editId,
  isTodoNull,
  getDetail,
}: TodoDetailProps) {
  const [editing, setEditing] = useState(false);

  // 수정 모드와 상세정보 모드 토글
  const toggleEditing = () => setEditing(!editing);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  // todo를 수정하는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm("정말 수정하시겠습니까?")) {
      TodoUpdateApi(editId, editTitle, editText)
        .then(() => reRender())
        .catch((error) => {
          alert(error.response.data["details"]);
        });
    }
  };

  // 수정을 취소하는 함수
  const onCancel = () => {
    if (detail && window.confirm("정말 수정을 취소하시겠습니까?")) {
      setEditTitle(detail.title);
      setEditText(detail.content);
      reRender();
    }
  };

  const reRender = () => {
    setEditing(false);
    getDetail(editId);
    getToDos();
  };

  return (
    <article style={{ width: "216px" }}>
      {/* todoNull은 삭제된 todo일 경우 에러를 표시하기 위한 변수 */}
      {isTodoNull ? (
        <section>
          <h2>상세 정보</h2>
          <p>존재하지 않는 todo입니다.</p>
        </section>
      ) : // editing은 수정 모드를 확인 하는 변수
      editing ? (
        <section>
          <h2>수정 하기</h2>
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              value={editTitle}
              placeholder="제목"
              onChange={onChangeTitle}
              style={{ marginBottom: "10px", padding: "3px 0" }}
            />
            <textarea
              rows={6}
              value={editText}
              placeholder="텍스트 입력..."
              onChange={onChangeText}
              style={{ margin: "10px 0" }}
            />

            <input
              type="submit"
              value="수정"
              style={{ marginBottom: "10px" }}
            />
          </form>
          <button onClick={onCancel} style={{ width: "216px" }}>
            취소
          </button>
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
          ) : (
            ""
          )}
        </section>
      )}
    </article>
  );
}
