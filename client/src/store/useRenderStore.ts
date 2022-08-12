import create from "zustand";

interface RenderStoreType {
  isReRender: boolean;
  setIsReRender: (isReRender: boolean) => void;
}

const useRenderStore = create<RenderStoreType>((set) => ({
  isReRender: false,

  setIsReRender: (changeBoolean: boolean) => {
    set({ isReRender: changeBoolean });
  },
}));

export default useRenderStore;
