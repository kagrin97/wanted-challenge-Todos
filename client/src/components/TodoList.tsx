import { Link, useParams } from "react-router-dom";

import TodoDetail from "components/TodoDetail";

import useDeleteTodo from "hooks/todo/useDeleteTodo";
import useGetTodos from "hooks/todo/useGetTodos";

import useNullTodoStore from "store/useNullTodoStore";
import useGetWidthStore from "store/useGetWidthStore";

import { Todo } from "types/todo";

import { Skeleton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

/**
 * Todo List를 구성하는 컴포넌트
 */
export default function TodoList() {
  let { curTodoId } = useParams();

  const { setIsTodoNull } = useNullTodoStore();

  const { windowSize } = useGetWidthStore();

  const { data: todos, isLoading, isRefetching } = useGetTodos();

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

  const [isSkeleton, setIsSkeleton] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isLoading && !isRefetching) {
      timer = setTimeout(() => setIsSkeleton(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [isLoading, isRefetching]);

  return (
    <article style={{ width: "16.313rem" }}>
      <h2>리스트</h2>
      {!isSkeleton ? (
        todos?.data.data.length ? (
          todos?.data.data.map((todo: Todo) => (
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
          ))
        ) : (
          "Todo가 없습니다."
        )
      ) : (
        <Skeleton variant="rounded" width="16.313rem" height="16.313rem" />
      )}
    </article>
  );
}
