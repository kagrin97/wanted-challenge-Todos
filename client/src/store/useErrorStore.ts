import create from "zustand";

interface ErrorStoreType {
  isError: boolean;
  errorText: string;
  setIsError: (isError: boolean) => void;
  setErrorText: (errorText: string) => void;
}

const useErrorStore = create<ErrorStoreType>((set) => ({
  isError: false,
  errorText: "",

  setIsError: (changeBoolean: boolean) => {
    set({ isError: changeBoolean });
  },
  setErrorText: (changeText: string) => {
    set({ errorText: changeText });
  },
}));

export default useErrorStore;
