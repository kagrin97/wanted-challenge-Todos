import axios from "axios";

export default async function TodoApi() {
  const token = localStorage.getItem("login-token");
  let response;

  try {
    response = await axios.get(`http://localhost:8080/todos`, {
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
