import axios from "axios";

export default async function AuthApi(
  newAccount: boolean,
  email: string,
  password: string
) {
  let response;

  // 회원 가입
  if (newAccount) {
    try {
      response = await axios.post(`http://localhost:8080/users/create`, {
        email: email,
        password: password,
      });
    } catch (error) {
      throw error;
    }
  }
  // 로그인
  else {
    try {
      response = await axios.post(`http://localhost:8080/users/login`, {
        email: email,
        password: password,
      });
    } catch (error) {
      throw error;
    }
  }

  if (response !== undefined && response.data.token) {
    localStorage.setItem("login-token", response.data.token);
  }
}
