import { apiBaseUrl } from "../api";

export default async function TodoApi() {
  const token = localStorage.getItem("login-token");
  let response;

  try {
    response = await apiBaseUrl.get(`/todos`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw error;
  }

  if (response !== undefined) {
    return response.data.data;
  }
}
