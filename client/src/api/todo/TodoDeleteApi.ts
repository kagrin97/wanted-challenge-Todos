import { apiBase } from "api/api";

/**
 * Todo 추가 API
 * @param id 삭제할 todo id
 */
export default function TodoDeleteApi(id: string) {
  const token = localStorage.getItem("login-token");
  return apiBase.delete(`/todos/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
