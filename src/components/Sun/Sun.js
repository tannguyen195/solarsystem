import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import "./SunMaterial";

function Sun() {
  const shader = useRef();
  const texture = useTexture({
    map: process.env.PUBLIC_URL + "/texture_sun.jpeg",
  });
  useFrame((state, delta) => {
    shader.current.time += delta;
  });
  return (
    <mesh layers={0} position={[0, 0, 0]}>
      <sphereBufferGeometry args={[16, 30, 30]} />
      <sunMaterial ref={shader} />
    </mesh>
  );
}

export default Sun;
