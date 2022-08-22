import { apiBase } from "api/api";

/**
 * Todo 추가 API
 * @param title 제목
 * @param text 내용
 */
export default function TodoAddApi(title: string, text: string) {
  const token = localStorage.getItem("login-token");

  return apiBase.post(
    `/todos`,
    {
      title: title,
      content: text,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}
