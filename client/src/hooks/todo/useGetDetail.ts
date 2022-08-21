import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import TodoDetailsApi from "api/todo/TodoDetailsApi";

import useDetailTodoStore from "store/useDetailTodoStore";
import useEditTodoStore from "store/useEditTodoStore";
import useNullTodoStore from "store/useNullTodoStore";

import { Todo } from "types/todo";

export default async function useGetDetail(curTodoId: string | undefined) {
  const { setDetail } = useDetailTodoStore();
  const { setEditTitle, setEditText, setEditId } = useEditTodoStore();
  const { setIsTodoNull } = useNullTodoStore();

  const navigate = useNavigate();

  const reRenderValue = (todo: Todo) => {
    setDetail(todo);
    setEditTitle(todo.title);
    setEditText(todo.content);
    setEditId(todo.id);
    setIsTodoNull(false);
  };

  return useQuery(["todoDetail", curTodoId], () => TodoDetailsApi(curTodoId), {
    cacheTime: 3600,
    staleTime: 60,
    onSuccess: (data) => {
      reRenderValue(data.data.data);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error?.response?.data["details"]);
        navigate("/");
      }
    },
  });
}
