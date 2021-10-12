import * as THREE from "three";
import { planets, earthData, moonData } from "./planetData";
export function convertCoordArrayToVec3(array) {
  return new THREE.Vector3(array[0], array[1], array[2]);
}

export function getPlanetByName(planetName) {
  const allPlanet = [...planets, earthData, moonData];
  return allPlanet.find((planet) => {
    return planet.name === planetName;
  });
}
