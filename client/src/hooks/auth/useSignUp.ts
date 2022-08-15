import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import SignUpApi from "api/auth/SignUpApi";

interface PropsType {
  email: string;
  password: string;
}

export default function useSignUp(email: string, password: string) {
  const navigate = useNavigate();

  return useMutation(
    ({ email, password }: PropsType) => SignUpApi(email, password),
    {
      onSuccess: (data) => {
        console.log("회원가입 성공");
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
