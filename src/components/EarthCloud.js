import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import * as THREE from "three";
import OrbitRing from "./OrbitRing";
import { earthData } from "../utilities/planetData";
function Earth({
  name,
  rotationRate,
  orbitRate,
  size,
  distance,
  axialTilt,
  earthCloud,
}) {
  const cloudMaterial = useTexture({
    map: earthCloud,
  });
  const ref = useRef();
  const activePlanetName = useStore(
    (state) => state.activePlanet.activePlanetName
  );

  useFrame(() => {
    const time = Date.now();
    if (activePlanetName !== name) {
      ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distance;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distance;
    }
  });

  return (
      <mesh
        rotation={axialTilt}
        name={name}
        position={[distance, 0, 0]}
        ref={ref}
      >
        <sphereBufferGeometry args={[size + 0.005, 48, 48]} />
        <meshPhongMaterial
          {...cloudMaterial}
          attach="material"
          transparent={true}
        />
      </mesh>
  );
}

export default Earth;
