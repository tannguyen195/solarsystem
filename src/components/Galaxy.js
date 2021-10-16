import { useTexture } from "@react-three/drei";
import { BackSide } from "three";
import texture from "../assets/textures/galaxy_starfield.png";
import { BACKGROUND_LAYER } from "../utilities/constants";

function Galaxy({ layers = BACKGROUND_LAYER }) {
  const galaxyMaterial = useTexture(texture);
  return (
    <mesh layers={layers}>
      <sphereBufferGeometry args={[10000, 48, 48]} />
      <meshBasicMaterial map={galaxyMaterial} side={BackSide} />
    </mesh>
  );
}

export default Galaxy;
