import { useTexture } from "@react-three/drei";
import { BackSide } from "three";
import texture from "../assets/textures/galaxy_starfield.png";

function Galaxy() {
  const galaxyMaterial = useTexture(texture);
  return (
    <mesh>
      <sphereBufferGeometry args={[10000, 48, 48]} />
      <meshBasicMaterial map={galaxyMaterial} side={BackSide} transparent={true} />
    </mesh>
  );
}

export default Galaxy;
