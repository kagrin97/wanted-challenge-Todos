import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import TodoAddApi from "api/todo/TodoAddApi";

import { queryClient } from "index";

interface PropsType {
  title: string;
  text: string;
}

/**
 * title과 text를 받아서 todo를 추가하는 mutation을 리턴하는 함수
 * @param title 제목
 * @param text 내용
 * @returns mutation
 */
export default function useAddTodo({ title, text }: PropsType) {
  const navigate = useNavigate();

  return useMutation(({ title, text }: PropsType) => TodoAddApi(title, text), {
    onSuccess: async () => {
      queryClient.invalidateQueries("todoList");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error?.response?.data["details"]);
        navigate("/");
      }
    },
  });
}
