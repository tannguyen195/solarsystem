import { useTexture } from "@react-three/drei";
import { sunRadius } from "../utilities/planetData";
import sunTexture from "../assets/textures/texture_sun.jpeg";

function Sun() {
  const texture = useTexture({
    map: sunTexture,
  });
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[sunRadius, 48, 48]} />
      <meshPhongMaterial attach="material" {...texture} />
    </mesh>
  );
}

export default Sun;
