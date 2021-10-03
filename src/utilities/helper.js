import * as THREE from "three";

export function convertCoordArrayToVec3(array) {
  return new THREE.Vector3(array[0], array[1], array[2]);
}
