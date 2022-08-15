import { apiBaseUrl } from "api/api";

export default async function LogInApi(email: string, password: string) {
  return await apiBaseUrl.post(`/users/login`, {
    email: email,
    password: password,
  });
}
