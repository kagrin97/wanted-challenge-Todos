import create from "zustand";

interface WidthStoreType {
  windowSize: number;
  setWindowSize: (newWindowSize: number) => void;
}

const useGetWidthStore = create<WidthStoreType>((set) => ({
  windowSize: window.innerWidth,

  setWindowSize: (newWindowSize: number) => {
    set({ windowSize: newWindowSize });
  },
}));

export default useGetWidthStore;
