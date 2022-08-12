import TodoUpdateApi from "../api/todo/TodoUpdateApi";

interface PropsType {
  editId: string;
  editTitle: string;
  editText: string;
}

export default function useUpdateTodo({
  editId,
  editTitle,
  editText,
}: PropsType) {
  if (window.confirm("정말 수정하시겠습니까?")) {
    TodoUpdateApi(editId, editTitle, editText).catch((error) => {
      alert(error.response.data["details"]);
    });
  }
}
