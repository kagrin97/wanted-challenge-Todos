import { useState, useEffect } from "react";

import TodoGetApi from "../api/todo/TodoGetApi";

export default function useGetTodos() {
  const [todos, setTods] = useState([]);
  console.log(213);
  useEffect(() => {
    TodoGetApi()
      .then((res) => {
        setTods(res.data);
      })
      .catch((error) => {
        alert(error.response.data["details"]);
      });
  }, [todos]);
  return todos;
}
