import { Dispatch, SetStateAction, useDebugValue } from "react";
import { Link, useParams } from "react-router-dom";

import useDeleteTodo from "../hooks/useDeleteTodo";

interface TodoDeleteProps {
  todos: object[];
  setIsTodoNull?: Dispatch<SetStateAction<boolean>>;
  setIsReRender: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoList({
  todos,
  setIsTodoNull,
  setIsReRender,
}: TodoDeleteProps) {
  let { curTodoId } = useParams();

  // todo를 삭제하는 함수
  const onDelete = async (deleteTodoId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeleteTodo(deleteTodoId);
    deleteTodoCheck(deleteTodoId);
    setIsReRender((prev) => !prev);
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
