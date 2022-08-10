import axios from "axios";

export default async function getDetail(id: string) {
  const token = localStorage.getItem("login-token");
  let response;

  try {
    response = await axios.get(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error: any) {
    alert(error.response.data["details"]);
  }

  if (response !== undefined) {
    return response.data;
  }
}
