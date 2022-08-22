import create from "zustand";

interface NullTodoStoreType {
  isTodoNull: boolean;
  setIsTodoNull: (isTodoNull: boolean) => void;
}

/**
 * todo가 없는 상태의 state, setState 저장하는 store
 * @isTodoNull boolean;
 * @setIsTodoNull (isTodoNull: boolean) => void;
 */
const useNullTodoStore = create<NullTodoStoreType>((set) => ({
  isTodoNull: false,

  setIsTodoNull: (changeBoolean: boolean) => {
    set({ isTodoNull: changeBoolean });
  },
}));

export default useNullTodoStore;
