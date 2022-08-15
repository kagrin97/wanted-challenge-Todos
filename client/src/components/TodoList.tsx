import { Link, useParams } from "react-router-dom";

import useDeleteTodo from "hooks/todo/useDeleteTodo";
import useGetTodos from "hooks/todo/useGetTodos";

import useNullTodoStore from "store/useNullTodoStore";

export default function TodoList() {
  let { curTodoId } = useParams();

  const { setIsTodoNull } = useNullTodoStore();

  const todos = useGetTodos();

  const deleteTodoMutation = useDeleteTodo("");

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
    <article style={{ width: "216px" }}>
      <h2>리스트</h2>
      {todos &&
        todos.map((todo: any) => (
          <ul key={todo.id} style={{ display: "flex" }}>
            <li>
              <h3>
                <Link
                  style={{
                    textDecoration: "none",
                    color: curTodoId === todo.id ? "green" : "black",
                  }}
                  to={`/todo/${todo.id}`}
                >
                  {todo.title}
                </Link>
                <button
                  onClick={() => onDelete(todo.id)}
                  style={{
                    border: "0",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                >
                  ❌
                </button>
              </h3>
            </li>
          </ul>
        ))}
    </article>
  );
}
