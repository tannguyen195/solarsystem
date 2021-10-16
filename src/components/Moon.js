import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import OrbitRing from "./OrbitRing";

function Moon({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distanceScale,
  axialTilt,
  planetGeometry,
  layers,
  sphere,
}) {
  const planetMaterial = useTexture({ map: texture });
  const ref = useRef();
  const orbit = useRef();

  const activePlanetName = useStore((state) => state.activePlanet?.name);

  const { scene } = useThree();
  const earthPosition = scene.getObjectByName("earth")?.position;
  const moonPosition = scene.getObjectByName("moon")?.position;

  const MoonOrbit = () => {
    return <OrbitRing radius={2.5} />;
  };
  useFrame(() => {
    const time = Date.now();
    ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed;

    if (name !== activePlanetName) {
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;

      ref.current.position.x = earthPosition.x + ref.current.position.x / 10;
      ref.current.position.z = earthPosition.z + ref.current.position.z / 10;

      orbit.current.position.x = earthPosition.x;
      orbit.current.position.z = earthPosition.z;
    }
  });

  return (
    <group>
      <mesh
        geometry={sphere}
        layers={layers}
        scale={size}
        rotation={axialTilt}
        name={name}
        position={[0, 0, 0]}
        ref={ref}
      >
        {planetGeometry}
        <meshStandardMaterial
          attach="material"
          {...planetMaterial}
          shininess={0}
          bumpScale={0.3}
        />
      </mesh>
      {earthPosition && moonPosition && (
        <mesh ref={orbit}>
          <MoonOrbit />
        </mesh>
      )}
    </group>
  );
}

export default Moon;
