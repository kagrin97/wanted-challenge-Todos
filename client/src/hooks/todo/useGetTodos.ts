import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import TodoGetApi from "api/todo/TodoGetApi";

export default function useGetTodos() {
  const navigate = useNavigate();

  const { data } = useQuery("todoList", TodoGetApi, {
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error?.response?.data["details"]);
        navigate("/");
      }
    },
  });
  return data?.data.data;
}
