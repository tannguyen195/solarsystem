import { useTexture } from "@react-three/drei";
import { BackSide } from "three";
import texture from "../assets/textures/galaxy_starfield.png";

function Galaxy({ layers = 12 }) {
  const galaxyMaterial = useTexture(texture);
  return (
    <mesh layers={layers}>
      <sphereBufferGeometry args={[10000, 48, 48]} />
      <meshBasicMaterial
        map={galaxyMaterial}
        side={BackSide}
        transparent={true}
      />
    </mesh>
  );
}

export default Galaxy;
