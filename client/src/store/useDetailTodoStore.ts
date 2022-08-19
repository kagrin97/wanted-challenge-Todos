import create from "zustand";

import { Todo } from "types/todo";

interface DetailTodoStoreType {
  detail: Todo | undefined;
  setDetail: (detail: Todo) => void;
}

const useDetailTodoStore = create<DetailTodoStoreType>((set) => ({
  detail: undefined,

  setDetail: (newDetail: Todo) => set({ detail: newDetail }),
}));

export default useDetailTodoStore;
