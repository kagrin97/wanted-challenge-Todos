import axios from "axios";

export default async function getTodo() {
  const token = localStorage.getItem("login-token");
  let response;

  try {
    response = await axios.get(`http://localhost:8080/todos`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error: any) {
    console.log(error);
    alert(error.response.data["details"]);
  }

  if (response !== undefined) {
    return response.data;
  }
}
