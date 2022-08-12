import TodoAddApi from "../api/todo/TodoAddApi";

interface PropsType {
  title: string;
  text: string;
}

export default function useAddTodo({ title, text }: PropsType) {
  TodoAddApi(title, text).catch((error) => {
    alert(error.response.data["details"]);
  });
}
