import { apiBase } from "api/api";

/**
 * 회원가입 API
 * @param email 이메일
 * @param password 비밀번호
 */
export default function SignUpApi(email: string, password: string) {
  return apiBase.post(`/users/create`, {
    email: email,
    password: password,
  });
}
