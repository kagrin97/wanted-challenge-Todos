import ToDoDetailsApi from "../api/todo/TodoDetailsApi";

export default async function useGetDetail(curTodoId: string | undefined) {
  try {
    const res = await ToDoDetailsApi(curTodoId);
    return res.data;
  } catch (error) {
    throw error;
  }
}
