import * as THREE from "three";

const createCameraSlice = (set, get) => ({
  isControl: false,
  setControl: (payload) => {
    set(() => ({ isControl: payload }));
  },

  activePlanet: null,
  setActivePlanet: (payload) => {
    set(() => ({ activePlanet: payload }));
  },

  activeCameraPlanet: null,
  setActiveCameraPlanet: (payload) => {
    set(() => ({ activeCameraPlanet: payload }));
  },

  shouldUpdateCameraPosition: true,
  setUpdateCameraPosition: (payload) => {
    set(() => ({ shouldUpdateCameraPosition: payload }));
  },
  
//Init position
  cameraPos: new THREE.Vector3(
    66.68508708051569,
    62.688036623625365,
    64.63972187177964
  ),
  setCameraPos: (payload) => {
    set(() => ({ cameraPos: payload }));
  },

  cameraRos: new THREE.Vector3(
    -0.7700713215209677,
    0.6374423945561629,
    0.5234656298847726
  ),
});

export default createCameraSlice;
