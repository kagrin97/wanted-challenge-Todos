import create from "zustand";

interface NullTodoStoreType {
  isTodoNull: boolean;
  setIsTodoNull: (isTodoNull: boolean) => void;
}

const useNullTodoStore = create<NullTodoStoreType>((set) => ({
  isTodoNull: false,

  setIsTodoNull: (changeBoolean: boolean) => {
    set({ isTodoNull: changeBoolean });
  },
}));

export default useNullTodoStore;
