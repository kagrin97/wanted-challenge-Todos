import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import TodoAddApi from "api/todo/TodoAddApi";

import { queryClient } from "index";

interface PropsType {
  title: string;
  text: string;
}

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
