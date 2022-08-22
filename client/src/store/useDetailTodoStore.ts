import create from "zustand";

import { Todo } from "types/todo";

interface DetailTodoStoreType {
  detail: Todo | undefined;
  setDetail: (detail: Todo) => void;
}

/**
 * 상세보기에서 보여지는 todo의 state, setState 저장하는 store
 * @detail Todo | undefined;
 * @setDetail (detail: Todo) => void;
 */
const useDetailTodoStore = create<DetailTodoStoreType>((set) => ({
  detail: undefined,

  setDetail: (newDetail: Todo) => set({ detail: newDetail }),
}));

export default useDetailTodoStore;
