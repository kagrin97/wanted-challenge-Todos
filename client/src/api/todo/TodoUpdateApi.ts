import { apiBaseUrl } from "../api";

export default async function TodoUpdateApi(
  editId: string,
  editTilte: string,
  editText: string
) {
  const token = localStorage.getItem("login-token");

  return await apiBaseUrl.put(
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
