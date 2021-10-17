import create from "zustand";

import createCameraSlice from "./createCameraSlice";
import createControlSlice from "./createControlSlice";

const useStore = create((set, get) => ({
  ...createCameraSlice(set, get),
  ...createControlSlice(set, get),

  
}));

export default useStore;
