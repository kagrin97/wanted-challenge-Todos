import create from "zustand";

interface WidthStoreType {
  windowSize: number;
  setWindowSize: (newWindowSize: number) => void;
}

/**
 * window의 크기를 저장하는 store
 * @windowSize number;
 * @setWindowSize (newWindowSize: number) => void;
 */
const useGetWidthStore = create<WidthStoreType>((set) => ({
  windowSize: window.innerWidth,

  setWindowSize: (newWindowSize: number) => {
    set({ windowSize: newWindowSize });
  },
}));

export default useGetWidthStore;
