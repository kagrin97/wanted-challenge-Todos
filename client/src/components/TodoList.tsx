import axios from "axios";

export default function TodoList({
  getToDos,
  onDetail,
  todos,
  setTodoNull,
}: any) {
  const token = localStorage.getItem("login-token");

  // todo를 삭제하는 함수
  const onDelete = async (id: string) => {
    await axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    // localStorage의 history에서 삭제할 todo를 찾아서 삭제하는 조건문
    const history = localStorage.getItem("history");
    if (history) {
      let arr = JSON.parse(history).filter((todo: any) => todo.id !== id);
      localStorage.setItem("history", JSON.stringify(arr));
    }

    setTodoNull(true);
    getToDos();
  };
  return (
    <div>
      <h2>리스트</h2>
      {todos.map((todo: any) => (
        <ul
          onClick={() => onDetail(todo.id)}
          key={todo.id}
          style={{ display: "flex" }}
        >
          <li>
            <h3>
              {todo.title}
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
    </div>
  );
}
