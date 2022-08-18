import { apiBase } from "api/api";

export default function SignUpApi(email: string, password: string) {
  return apiBase.post(`/users/create`, {
    email: email,
    password: password,
  });
}
