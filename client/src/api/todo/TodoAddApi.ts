import { apiBaseUrl } from "../api";

export default async function TodoAddApi(title: string, text: string) {
  const token = localStorage.getItem("login-token");

  try {
    await apiBaseUrl.post(
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
  } catch (error) {
    throw error;
  }
}
