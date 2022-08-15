import { apiBaseUrl } from "../api";

export default async function TodoApi() {
  const token = localStorage.getItem("login-token");
  return await apiBaseUrl.get(`/todos`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
