import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import TodoGetApi from "api/todo/TodoGetApi";

/**
 * 모든 todo를 가져오는 query을 리턴하는 함수
 * @returns query
 */
export default function useGetTodos() {
  const navigate = useNavigate();

  return useQuery("todoList", TodoGetApi, {
    cacheTime: 3600,
    staleTime: 60,
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error?.response?.data["details"]);
        navigate("/");
      }
    },
  });
}
