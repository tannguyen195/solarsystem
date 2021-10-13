import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import "./StarMaterial";

export default function Particle({ count = 40, scale, position }) {
  const shader = useRef();

  const [positionArray, scaleArray, colorArray] = useMemo(() => {
    const positionArray = new Float32Array(count * 3);
    const scaleArray = new Float32Array(count);
    const colorArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        Math.random() * 1.5 * 2,
        (Math.random() - 0.5) * 4
      ).toArray(positionArray, i * 3);
      scaleArray[i] = Math.random();
      new THREE.Vector3(
        215 - Math.random() * 10 * 3,
        215 - Math.random() * 10 * 10,
        Math.random() * 10
      ).toArray(colorArray, i * 3);
    }
    return [positionArray, scaleArray, colorArray];
  }, [count]);

  useFrame((state, delta) => {
    shader.current.time += delta / 2;
  });
  return (
    <points position={position} scale={scale} key={count}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={count}
          array={positionArray}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "aScale"]}
          count={count}
          array={scaleArray}
          itemSize={1}
        />
        <bufferAttribute
          attachObject={["attributes", "color"]}
          count={count}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <starMaterial ref={shader} transparent depthWrite={false} />
    </points>
  );
}
