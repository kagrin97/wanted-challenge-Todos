import { apiBaseUrl } from "api/api";

export default async function TodoAddApi(title: string, text: string) {
  const token = localStorage.getItem("login-token");

  return await apiBaseUrl.post(
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
