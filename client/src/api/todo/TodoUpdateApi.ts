import { apiBaseUrl } from "../api";

export default async function TodoUpdateApi(
  editId: string,
  editTilte: string,
  editText: string
) {
  const token = localStorage.getItem("login-token");

  try {
    await apiBaseUrl.put(
      `http://localhost:8080/todos/${editId}`,
      {
        title: editTilte,
        content: editText,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (error) {
    throw error;
  }
}
