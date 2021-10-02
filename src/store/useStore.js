import create from "zustand";

import createCameraSlice from "./createCameraSlice";

const useStore = create((set, get) => ({
  ...createCameraSlice(set, get),
}));

export default useStore;