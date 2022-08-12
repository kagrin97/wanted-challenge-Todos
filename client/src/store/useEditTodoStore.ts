import create from "zustand";

interface EditStoreType {
  editTitle: string;
  editText: string;
  editId: string;
  setEditTitle: (title: string) => void;
  setEditText: (text: string) => void;
  setEditId: (id: string) => void;
}

const useEditTodoStore = create<EditStoreType>((set) => ({
  editTitle: "",
  editText: "",
  editId: "",

  setEditTitle: (title: string) => set({ editTitle: title }),
  setEditText: (text: string) => set({ editText: text }),
  setEditId: (id: string) => set({ editId: id }),
}));

export default useEditTodoStore;
