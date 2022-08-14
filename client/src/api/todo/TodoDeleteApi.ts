import { apiBaseUrl } from "../api";

export default async function TodoDeleteApi(id: string) {
  const token = localStorage.getItem("login-token");
  try {
    await apiBaseUrl.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw error;
  }
}
