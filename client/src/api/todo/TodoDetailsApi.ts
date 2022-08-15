import { apiBaseUrl } from "api/api";

export default async function TodoDetailsApi(curTodoId: string | undefined) {
  const token = localStorage.getItem("login-token");
  return await apiBaseUrl.get(`/todos/${curTodoId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
