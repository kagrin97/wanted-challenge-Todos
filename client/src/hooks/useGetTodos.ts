import TodoGetApi from "../api/todo/TodoGetApi";
import { useQuery } from "react-query";

export default function useGetTodos() {
  return useQuery("todoList", TodoGetApi, {});
}
