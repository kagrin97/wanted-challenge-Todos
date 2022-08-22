import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import TodoDeleteApi from "api/todo/TodoDeleteApi";

import { queryClient } from "index";

interface PropsType {
  deleteTodoId: string;
}

/**
 * 삭제할 todo의 id를 받아서 todo를 삭제하는 mutation을 리턴하는 함수
 * @param deleteTodoId 삭제할 todo의 id
 * @returns Mutation
 */
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
