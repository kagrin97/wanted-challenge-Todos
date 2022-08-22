import { queryClient } from "index";

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { AxiosError } from "axios";

import TodoUpdateApi from "api/todo/TodoUpdateApi";

interface PropsType {
  editId: string;
  editTitle: string;
  editText: string;
}

/**
 * 수정할 todo의 id, 수정할 todo의 제목, 수정할 todo의 내용을 받아서 todo를 수정하는 mutation을 리턴하는 함수
 * @param editId 수정할 todo의 id
 * @param editTitle 수정할 todo의 Title
 * @param editText 수정할 todo의 Text
 * @returns Mutation
 */
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
