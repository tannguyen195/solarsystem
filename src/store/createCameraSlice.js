import * as THREE from "three";

const createCameraSlice = (set, get) => ({

  //Init position
  cameraPos: new THREE.Vector3(
    838918.0733672641,
    788633.9991424268,
    813186.7754809225
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

// 66.68508708051569,
//     62.688036623625365,
//     64.63972187177964

// 838918.0733672641,
// 788633.9991424268,
// 813186.7754809225
export default createCameraSlice;
