import create from "zustand";

import { Todo } from "../types/todo";

interface DetailTodoStoreType {
  detail: Todo;
  setDetail: (detail: Todo) => void;
}

const useDetailTodoStore = create<DetailTodoStoreType>((set) => ({
  detail: { content: "", createdAt: "", id: "", title: "", updatedAt: "" },

  setDetail: (newDetail: Todo) => set({ detail: newDetail }),
}));

export default useDetailTodoStore;
