import { apiBase } from "../api";

/**
 * 모든 Todo를 가져오는 API
 */
export default function TodoGetApi() {
  const token = localStorage.getItem("login-token");
  return apiBase.get(`/todos`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
