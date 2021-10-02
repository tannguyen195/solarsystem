import * as THREE from "three";

const createCameraSlice = (set, get) => ({
  activeMesh: {},
  setActiveMesh: () => {
    set((mesh) => ({ activeMesh: mesh }));
  },
  shouldUpdate: true,
  setShouldUpdate: () => {
    set(() => ({ shouldUpdate: false }));
  },
  activeMeshName: "Ship",
  cameraPos: [0, 0, 0 - 1],
  cameraRos: [0, 0, 0],
  targetPosition: new THREE.Vector3(-0.26, 0.57, 0),
});

export default createCameraSlice;
