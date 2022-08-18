import { apiBase } from "api/api";

export default function TodoDeleteApi(id: string) {
  const token = localStorage.getItem("login-token");
  return apiBase.delete(`/todos/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
