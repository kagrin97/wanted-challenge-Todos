import { apiBase } from "../api";

/**
 * 수정할 Todo 정보 가져와 수정하는 API
 * @param editId 수정할 todo id
 * @param editTilte 수정할 todo 제목
 * @param editText  수정할 todo 내용
 */
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
