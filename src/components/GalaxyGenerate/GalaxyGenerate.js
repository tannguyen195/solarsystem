import * as THREE from "three";
import { useMemo, useRef } from "react";

import "./shaderGalaxy/GalaxyMaterial";
import { useFrame } from "@react-three/fiber";

function GalaxyGenerate({
  count = 200000,

  radius = 5,
  branches = 3,
  random = 0.2,

  randomnessPower = 3,
  insideColor = "#ff6030",
  outsideColor = "#1b3984",
  layers = 11,
}) {
  const shader = useRef();
  const galaxy = useRef();
  const [positions, colors, scales, randomness] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count * 1);
    const randomness = new Float32Array(count * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);

    for (let i = 0; i < count; i++) {
      //Position
      const pointRadius = Math.random() * radius;

      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      new THREE.Vector3(
        Math.cos(branchAngle) * pointRadius,
        0,
        Math.sin(branchAngle) * pointRadius
      ).toArray(positions, i * 3);

      //Randomness
      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        random *
        pointRadius;
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        random *
        pointRadius;
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        random *
        pointRadius;

      new THREE.Vector3(randomX, randomY, randomZ).toArray(randomness, i * 3);

      //Color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, pointRadius / radius);

      new THREE.Vector3(mixedColor.r, mixedColor.g, mixedColor.b).toArray(
        colors,
        i * 3
      );

      // Scale
      scales[i] = Math.random();
    }
    return [positions, colors, scales, randomness];
  }, [
    count,
    radius,
    branches,
    randomnessPower,
    insideColor,
    outsideColor,
    random,
  ]);
  useFrame((state, delta) => {
    shader.current.uTime += delta;

  });
  return (
    <points name="The Milky Way" layers={layers}>
      <bufferGeometry ref={galaxy}>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "color"]}
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "aScale"]}
          count={count}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attachObject={["attributes", "aRandomness"]}
          count={count}
          array={randomness}
          itemSize={3}
        />
      </bufferGeometry>

      <galaxyMaterial ref={shader} />
    </points>
  );
}

export default GalaxyGenerate;
