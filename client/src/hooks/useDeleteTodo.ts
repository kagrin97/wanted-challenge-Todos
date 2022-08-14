import TodoDeleteApi from "../api/todo/TodoDeleteApi";

export default async function useDeleteTodo(deleteTodoId: string) {
  if (window.confirm("정말 삭제하시겠습니까?")) {
    TodoDeleteApi(deleteTodoId).catch((error) => {
      alert(error.response.data["details"]);
    });
  }
}
