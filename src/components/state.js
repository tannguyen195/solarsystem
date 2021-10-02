import { createRef } from "react";
import * as THREE from "three";

const state = {
  models: {},

  sections: 3,
  pages: 3,
  zoom: 1,
  top: createRef(),

  activeMesh: {},
  activeMeshName: "Ship",
  cameraPos: new THREE.Vector3(
    -37.043057970163176,
    101.13502248709098,
    158.7221004385003
  ),
  target: new THREE.Vector3(4, 5, 5),
  shouldUpdate: true,
};

export default state;
