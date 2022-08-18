import { apiBase } from "../api";

export default function TodoUpdateApi(
  editId: string,
  editTilte: string,
  editText: string
) {
  const token = localStorage.getItem("login-token");

  return apiBase.put(
    `/todos/${editId}`,
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
}
