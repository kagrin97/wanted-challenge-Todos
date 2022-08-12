import { Link, useParams } from "react-router-dom";

import useDeleteTodo from "../hooks/useDeleteTodo";
import useGetTodos from "../hooks/useGetTodos";

import useRenderStore from "../store/useRenderStore";
import useNullTodoStore from "../store/useNullTodoStore";

export default function TodoList() {
  let { curTodoId } = useParams();

  const { isReRender, setIsReRender } = useRenderStore();
  const todos = useGetTodos(isReRender);

  const { setIsTodoNull } = useNullTodoStore();

  // todo를 삭제하는 함수
  const onDelete = async (deleteTodoId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeleteTodo(deleteTodoId);
    deleteTodoCheck(deleteTodoId);
    setIsReRender(!isReRender);
  };

  const deleteTodoCheck = (deleteTodoId: string) => {
    if (curTodoId === deleteTodoId && setIsTodoNull) {
      setIsTodoNull(true);
    }
  };

  return (
    <article style={{ width: "216px" }}>
      <h2>리스트</h2>
      {todos.map((todo: any) => (
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
