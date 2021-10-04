import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import OrbitRing from "./OrbitRing";
function Planet({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distance,
  axialTilt,
  bumpMap,
  normalMap,
  orbitData,
}) {
  const planetMaterial = useTexture({
    map: texture,
    bumpMap: bumpMap,
    normalMap: normalMap,
  });

  const ref = useRef();
  const activePlanet = useStore((state) => state.activePlanet);

  useFrame(({ scene }) => {
    const time = Date.now();
    ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed;
    if (name !== activePlanet) {
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distance;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distance;
      if (name === "moon") {
        const earthPosition = scene.getObjectByName("earth")?.position;
        ref.current.position.x = ref.current.position.x + earthPosition.x;
        ref.current.position.z = ref.current.position.z + earthPosition.z;
      }
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
          bumpScale={0.3}
        />
      </mesh>{" "}
      <OrbitRing {...orbitData} />
    </group>
  );
}

export default Planet;
