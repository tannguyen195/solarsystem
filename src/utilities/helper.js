import * as THREE from "three";
import useStore from "../store/useStore";
import {
  planets,
  earthData,
  moonData,
  sunData,
  galaxyData,
} from "./planetData";

const { detect } = require("detect-browser");

export function convertCoordArrayToVec3(array) {
  return new THREE.Vector3(array[0], array[1], array[2]);
}

export function getPlanetByName(planetName) {
  const allPlanet = [...planets, earthData, moonData, sunData, galaxyData];
  return allPlanet.find((planet) => {
    return planet.name === planetName;
  });
}

export const browser = detect();

export function generatePointCircle(radius) {
  const segmentCount = 128;
  let vertices = [];
  for (let i = 0; i <= segmentCount; i++) {
    let theta = (i / segmentCount) * Math.PI * 2;
    vertices.push([Math.cos(theta) * radius, 0, Math.sin(theta) * radius]);
  }
  return vertices;
}

export function playAudio(audio, volume = 1, loop = false) {
  if (useStore.getState().mute) {
    console.log("mutre")
    audio.pause();
  } else {
    audio.currentTime = 0;
    audio.volume = volume;
    audio.loop = loop;
    audio.play();
  }
}
