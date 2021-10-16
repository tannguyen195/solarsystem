import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import * as THREE from "three";
import OrbitRing from "./OrbitRing";
function Earth({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  axialTilt,
  bumpMap,
  specularMap,
  earthCloud,
  distanceScale,
  planetGeometry,
}) {
  const planetMaterial = useTexture({
    map: texture,
    bumpMap: bumpMap,
  });
  const cloudMaterial = useTexture({
    map: earthCloud,
  });
  const ref = useRef();
  const activePlanetName = useStore((state) => state.activePlanet?.name);

  useFrame(({ scene }) => {
    const time = Date.now();
    if (activePlanetName !== name) {
      if (activePlanetName !== "moon") {
        ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed
        ref.current.position.x =
          Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
        ref.current.position.z =
          Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
      }
    }
  });

  return (
    <>
      <mesh
        layers={2}
        scale={size}
        rotation={axialTilt}
        name={name}
        position={[distanceScale, 0, 0]}
        ref={ref}
      >
        {planetGeometry}
        <meshStandardMaterial
          attach="material"
          fog={false}
          {...planetMaterial}
          shininess={0}
          bumpScale={0.005}
          specular={new THREE.Color("grey")}
        />
        <mesh layers={2}>
          <sphereBufferGeometry args={[size + 0.005, 48, 48]} />
          <meshStandardMaterial
            {...cloudMaterial}
            fog={false}
            attach="material"
            transparent={true}
          />
        </mesh>
      </mesh>

      <OrbitRing radius={distanceScale} layers={2} />
    </>
  );
}

export default Earth;
