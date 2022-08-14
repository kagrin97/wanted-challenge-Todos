import { useMutation } from "react-query";
import TodoAddApi from "../api/todo/TodoAddApi";

import { queryClient } from "../index";

interface PropsType {
  title: string;
  text: string;
}

export default function useAddTodo({ title, text }: PropsType) {
  return useMutation(({ title, text }: PropsType) => TodoAddApi(title, text), {
    onSuccess: async () => {
      console.log("성공");
      queryClient.invalidateQueries("todoList");
    },
    onError: async (error) => {
      console.log(error);
    },
  });
}
