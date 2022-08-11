import { Dispatch, SetStateAction } from "react";
import { Link, useParams } from "react-router-dom";

import TodoDeleteApi from "../api/todo/TodoDeleteApi";

interface TodoDeleteProps {
  getToDos: () => void;
  todos: object[];
  setIsTodoNull?: Dispatch<SetStateAction<boolean>>;
}

export default function TodoList({
  getToDos,
  todos,
  setIsTodoNull,
}: TodoDeleteProps) {
  let { curTodoId } = useParams();

  // todo를 삭제하는 함수
  const onDelete = async (deleteTodoId: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      TodoDeleteApi(deleteTodoId).catch((error) => {
        alert(error.response.data["details"]);
      });
      deleteTodoCheck(deleteTodoId);
      getToDos();
    }
  };

  // 현재 상세 정보가 삭제되었으면 빈화면을 보여준다.
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
