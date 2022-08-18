import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { queryClient } from "index";
import TodoUpdateApi from "api/todo/TodoUpdateApi";

interface PropsType {
  editId: string;
  editTitle: string;
  editText: string;
}

export default function useUpdateTodo({
  editId,
  editTitle,
  editText,
}: PropsType) {
  const navigate = useNavigate();

  return useMutation(
    ({ editId, editTitle, editText }: PropsType) =>
      TodoUpdateApi(editId, editTitle, editText),
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
