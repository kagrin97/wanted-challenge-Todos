import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import LogInApi from "api/auth/LogInApi";

interface PropsType {
  email: string;
  password: string;
}

export default function useLogIn(email: string, password: string) {
  const navigate = useNavigate();

  return useMutation(
    ({ email, password }: PropsType) => LogInApi(email, password),
    {
      onSuccess: (data) => {
        console.log("로그인 성공");
        localStorage.setItem("login-token", data.data.token);
        navigate("/");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          alert(error?.response?.data["details"]);
        }
      },
    }
  );
}
