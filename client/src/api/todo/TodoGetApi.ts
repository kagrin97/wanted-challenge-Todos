import { apiBase } from "../api";

export default function TodoApi() {
  const token = localStorage.getItem("login-token");
  return apiBase.get(`/todos`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
