import axios from "axios";

export default async function TodoAddApi(title: string, text: string) {
  const token = localStorage.getItem("login-token");
  try {
    await axios.post(
      `http://localhost:8080/todos`,
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
