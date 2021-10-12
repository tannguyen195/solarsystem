import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";

function Moon({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distanceScale,
  axialTilt,
  planetGeometry,
  orbitData,
}) {
  const planetMaterial = useTexture({ map: texture });
  const ref = useRef();

  const activePlanetName = useStore((state) => state.activePlanet?.name);

  const { scene } = useThree();

  useFrame(() => {
    const time = Date.now();
    ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed;

    if (name !== activePlanetName) {
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;

      const earthPosition = scene.getObjectByName("earth")?.position;
      ref.current.position.x = earthPosition.x + ref.current.position.x/10;
      ref.current.position.z = earthPosition.z + ref.current.position.z/10;
    }
  });

  return (
    <mesh
      scale={size}
      rotation={axialTilt}
      name={name}
      position={[0, 0, 0]}
      ref={ref}
    >
      {planetGeometry}
      <meshPhongMaterial
        attach="material"
        {...planetMaterial}
        shininess={0}
        bumpScale={0.3}
      />
    </mesh>
  );
}

export default Moon;
