import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import * as THREE from "three";
import OrbitRing from "./OrbitRing";
import { earthData, moonData } from "../utilities/planetData";
import Planet from "./Planet";
function Earth({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distance,
  axialTilt,
  bumpMap,
  specularMap,
  earthCloud,
}) {
  const planetMaterial = useTexture({
    map: texture,
    bumpMap: bumpMap,
    specularMap: specularMap,
  });
  const cloudMaterial = useTexture({
    map: earthCloud,
  });
  const ref = useRef();
  const activePlanet = useStore((state) => state.activePlanet);

  useFrame(({ scene }) => {
    const time = Date.now();
    ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed

    if (name !== activePlanet) {
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distance;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distance;
    }
  });

  return (
    <group>
      <mesh
        rotation={axialTilt}
        name={name}
        position={[distance, 0, 0]}
        ref={ref}
        castShadow
      >
        <sphereBufferGeometry args={[size, 48, 48]} />
        <meshPhongMaterial
          attach="material"
          {...planetMaterial}
          shininess={0}
          bumpScale={0.005}
          specular={new THREE.Color("grey")}
        />
        <mesh>
          <sphereBufferGeometry args={[size + 0.005, 48, 48]} />
          <meshPhongMaterial
            {...cloudMaterial}
            attach="material"
            transparent={true}
          />
        </mesh>
      </mesh>
      <Planet {...moonData} />
      <OrbitRing {...earthData.orbitData} />
    </group>
  );
}

export default Earth;
