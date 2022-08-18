import { apiBase } from "api/api";

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
