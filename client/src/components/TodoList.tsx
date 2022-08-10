import { Dispatch, SetStateAction } from "react";
import { Link, useParams } from "react-router-dom";

import TodoDeleteAxios from "../api/deleteTodo";

interface TodoDeleteProps {
  getToDos: () => void;
  todos: object[];
  setTodoNull?: Dispatch<SetStateAction<boolean>>;
}

export default function TodoList({
  getToDos,
  todos,
  setTodoNull,
}: TodoDeleteProps) {
  let { id }: any = useParams();

  // todo를 삭제하는 함수
  const onDelete = async (id: string) => {
    TodoDeleteAxios(id).then();
    getToDos();

    // 현재 상세 정보가 삭제되었으면 빈화면을 보여준다.
    if (setTodoNull) {
      setTodoNull(true);
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
                  color: id === todo.id ? "green" : "black",
                }}
                to={`/${todo.id}`}
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
