import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import SignUpApi from "api/auth/SignUpApi";

import useErrorStore from "store/useErrorStore";

interface PropsType {
  email: string;
  password: string;
}

/**
 * 이메일과 비밀번호를 입력하면 회원가입 요청을 하는 mutation을 리턴하는 함수
 * @param email 이메일
 * @param password 비밀번호
 * @returns mutation
 */
export default function useSignUp(email: string, password: string) {
  const navigate = useNavigate();

  const { setIsError, setErrorText } = useErrorStore();

  return useMutation(
    ({ email, password }: PropsType) => SignUpApi(email, password),
    {
      onSuccess: (data) => {
        localStorage.setItem("login-token", data.data.token);
        setIsError(false);
        navigate("/");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          setIsError(true);
          setErrorText(error?.response?.data["details"]);
        }
      },
    }
  );
}
