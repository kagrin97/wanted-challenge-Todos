import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import TodoDeleteApi from "api/todo/TodoDeleteApi";

import { queryClient } from "index";

interface PropsType {
  deleteTodoId: string;
}

export default function useDeleteTodo(deleteTodoId: string) {
  const navigate = useNavigate();

  return useMutation(
    ({ deleteTodoId }: PropsType) => TodoDeleteApi(deleteTodoId),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries("todoList");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          alert(error?.response?.data["details"]);
          navigate("/");
        }
      },
    }
  );
}
