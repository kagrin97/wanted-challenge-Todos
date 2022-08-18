import { Link, useParams } from "react-router-dom";

import TodoDetail from "components/TodoDetail";

import useDeleteTodo from "hooks/todo/useDeleteTodo";
import useGetTodos from "hooks/todo/useGetTodos";

import useNullTodoStore from "store/useNullTodoStore";
import useGetWidthStore from "store/useGetWidthStore";

import { Todo } from "types/todo";

import { ListItemText, Button, Paper } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList() {
  let { curTodoId } = useParams();

  const { setIsTodoNull } = useNullTodoStore();

  const { windowSize } = useGetWidthStore();

  const todos = useGetTodos();

  const deleteTodoMutation = useDeleteTodo("");

  const isMobileTitle = true;

  // todo를 삭제하는 함수
  const onDelete = async (deleteTodoId: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTodoMutation.mutate({ deleteTodoId });
    }
    deleteTodoCheck(deleteTodoId);
  };

  const deleteTodoCheck = (deleteTodoId: string) => {
    if (curTodoId === deleteTodoId && setIsTodoNull) {
      setIsTodoNull(true);
    }
  };

  return (
    <article style={{ width: "16.313rem" }}>
      <h2>리스트</h2>
      {todos &&
        todos.map((todo: Todo) => (
          <div key={todo.id}>
            <ul>
              <li>
                <h3 style={{ display: "flex" }}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: curTodoId === todo.id ? "#1976D2" : "black",
                    }}
                    to={curTodoId === todo.id ? "/" : `/todo/${todo.id}`}
                  >
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "12.313rem",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {todo.title}
                    </div>
                  </Link>
                  <DeleteIcon
                    onClick={() => onDelete(todo.id)}
                    sx={{
                      cursor: "pointer",
                      color: "crimson",
                    }}
                  />
                </h3>
              </li>
            </ul>
            {curTodoId === todo.id && windowSize <= 689 && (
              <TodoDetail isMobileTitle={isMobileTitle} />
            )}
          </div>
        ))}
    </article>
  );
}
