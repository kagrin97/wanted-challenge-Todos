import { apiBase } from "api/api";

export default function TodoDetailsApi(curTodoId: string | undefined) {
  const token = localStorage.getItem("login-token");
  return apiBase.get(`/todos/${curTodoId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
