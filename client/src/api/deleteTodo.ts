import axios from "axios";

export default async function deleteTodo(id: string) {
  const token = localStorage.getItem("login-token");
  try {
    await axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error: any) {
    alert(error.response.data["details"]);
  }
}
