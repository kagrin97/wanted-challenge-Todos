import React, { useState } from "react";

import useUpdateTodo from "hooks/todo/useUpdateTodo";
import useGetDetail from "hooks/todo/useGetDetail";

import useEditTodoStore from "store/useEditTodoStore";
import useNullTodoStore from "store/useNullTodoStore";
import useDetailTodoStore from "store/useDetailTodoStore";

import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";

interface PropsType {
  isMobileTitle?: boolean;
}

/**
 * 상세정보 화면을 구성하는 컴포넌트
 * @param isMobileTitle 모바일일경우 제목을 안 보여줌
 */
export default function TodoDetail({ isMobileTitle }: PropsType) {
  let { curTodoId } = useParams<{ curTodoId: string }>();

  useGetDetail(curTodoId);

  const { editId, editTitle, editText, setEditTitle, setEditText } =
    useEditTodoStore();

  const { isTodoNull } = useNullTodoStore();
  const { detail } = useDetailTodoStore();

  const [editing, setEditing] = useState(false);

  // 수정 모드와 상세정보 모드 토글
  const toggleEditing = () => setEditing(!editing);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  const updateTodoMutation = useUpdateTodo({ editId, editTitle, editText });

  // todo를 수정하는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm("정말 수정하시겠습니까?")) {
      updateTodoMutation.mutate({ editId, editTitle, editText });
    }

    setEditing(false);
  };

  // 수정을 취소하는 함수
  const onCancel = () => {
    if (detail && window.confirm("정말 수정을 취소하시겠습니까?")) {
      setEditTitle(detail.title);
      setEditText(detail.content);
      setEditing(false);
    }
  };

  return (
    <article style={{ width: "16.313rem" }}>
      {/* todoNull은 삭제된 todo일 경우 에러를 표시하기 위한 변수 */}
      {isTodoNull ? (
        <section>
          {!isMobileTitle && <h2>상세 정보</h2>}
          <p>존재하지 않는 todo입니다.</p>
        </section>
      ) : // editing은 수정 모드를 확인 하는 변수
      editing ? (
        <section>
          {!isMobileTitle && <h2>상세 정보</h2>}
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="제목"
              multiline
              maxRows={4}
              value={editTitle}
              onChange={onChangeTitle}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="텍스트 입력..."
              multiline
              rows={4}
              value={editText}
              onChange={onChangeText}
              sx={{ my: "1rem" }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained">
                수정
              </Button>
              <Button onClick={onCancel} variant="outlined">
                취소
              </Button>
            </div>
          </form>
        </section>
      ) : (
        <section>
          {!isMobileTitle && <h2>상세 정보</h2>}
          {detail && (
            <div
              key={detail.id}
              style={{
                wordBreak: "break-all",
              }}
            >
              <h3>제목: {detail.title}</h3>
              <p>내용: {detail.content}</p>
              <p>만들어진 날짜: {detail.createdAt.slice(0, 10)}</p>
              <p>최근 수정된 날짜: {detail.updatedAt.slice(0, 10)}</p>

              <Button onClick={toggleEditing} variant="contained">
                수정
              </Button>
            </div>
          )}
        </section>
      )}
    </article>
  );
}
