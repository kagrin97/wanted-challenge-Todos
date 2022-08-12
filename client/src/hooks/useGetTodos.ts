import { useState, useEffect } from "react";

import TodoGetApi from "../api/todo/TodoGetApi";

export default function useGetTodos(a: boolean) {
  const [todos, setTods] = useState([]);

  useEffect(() => {
    TodoGetApi()
      .then((res) => {
        setTods(res.data);
      })
      .catch((error) => {
        alert(error.response.data["details"]);
      });
  }, [a]);

  return todos;
}
