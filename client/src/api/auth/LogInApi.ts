import { apiBase } from "api/api";

/**
 * 로그인 API
 * @param email 이메일
 * @param password 비밀번호
 */
export default function LogInApi(email: string, password: string) {
  return apiBase.post(`/users/login`, {
    email: email,
    password: password,
  });
}
