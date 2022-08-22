import { apiBase } from "api/api";

/**
 * ToDo 상세정보 가져오는 API
 * @param curTodoId 현재 선택된 todo id
 */
export default function TodoDetailsApi(curTodoId: string | undefined) {
  const token = localStorage.getItem("login-token");
  return apiBase.get(`/todos/${curTodoId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
