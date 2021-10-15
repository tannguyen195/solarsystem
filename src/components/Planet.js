import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useStore from "../store/useStore";
import OrbitRing from "./OrbitRing";
import SaturnRing from "./SaturnRing";

function Planet({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distanceScale,
  axialTilt,
  orbitData,
  layers,
  planetGeometry,
}) {
  const planetMaterial = useTexture({ map: texture });
  const ref = useRef();
  const activePlanetName = useStore((state) => state.activePlanet?.name);

  useFrame(({ scene }) => {
    const time = Date.now();
    ref.current.rotation.y += rotationRate * 0.1; //scale by 1/10 ratation speed;

    if (name !== activePlanetName) {
      ref.current.position.x =
        Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
      ref.current.position.z =
        Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distanceScale;
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
        layers={layers}
        scale={size}
        rotation={axialTilt}
        name={name}
        position={[distanceScale, 0, 0]}
        ref={ref}
      >
        {planetGeometry}
        <meshPhongMaterial
          attach="material"
          {...planetMaterial}
          shininess={0}
          bumpScale={0.3}
        />
      </mesh>{" "}
      <OrbitRing {...orbitData} layers={layers} />
      {name === "saturn" && <SaturnRing layers={layers} />}
    </group>
  );
}

export default Planet;
