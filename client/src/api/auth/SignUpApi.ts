import { apiBaseUrl } from "api/api";

export default async function SignUpApi(email: string, password: string) {
  return await apiBaseUrl.post(`/users/create`, {
    email: email,
    password: password,
  });
}
