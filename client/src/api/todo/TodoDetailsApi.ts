import axios from "axios";

export default async function TodoDetailsApi(curTodoId: string | undefined) {
  const token = localStorage.getItem("login-token");
  let response;

  try {
    response = await axios.get(`http://localhost:8080/todos/${curTodoId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw error;
  }

  if (response !== undefined) {
    return response.data;
  }
}