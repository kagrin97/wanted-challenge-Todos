import { apiBase } from "api/api";

export default function LogInApi(email: string, password: string) {
  return apiBase.post(`/users/login`, {
    email: email,
    password: password,
  });
}
