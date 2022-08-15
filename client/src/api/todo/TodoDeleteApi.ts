import { apiBaseUrl } from "api/api";

export default async function TodoDeleteApi(id: string) {
  const token = localStorage.getItem("login-token");
  return await apiBaseUrl.delete(`/todos/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
