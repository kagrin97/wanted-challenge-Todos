import create from "zustand";

interface EditStoreType {
  editTitle: string;
  editText: string;
  setEditTitle: (title: string) => void;
  setEditText: (text: string) => void;
}

const useEditTodoStore = create<EditStoreType>((set) => ({
  editTitle: "",
  editText: "",

  setEditTitle: (title: string) => set({ editTitle: title }),
  setEditText: (text: string) => set({ editText: text }),
}));

export default useEditTodoStore;
