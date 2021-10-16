import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import ringtexture from "../assets/textures/texture_jupiter.jpeg";
function SaturnRing({ layers }) {
  const ref = useRef();

  const ringTexture = useTexture({
    map: ringtexture,
  });

  useFrame(({ scene }) => {
    const saturnPosition = scene.getObjectByName("saturn")?.position;
    ref.current.position.x = saturnPosition.x;
    ref.current.position.z = saturnPosition.z;
  });

  return (
    <mesh
      layers={layers}
      ref={ref}
      position={[0, 0, 0]}
      name={"saturnRing"}
      rotation={[-26.73 * (Math.PI / 2), 0, 0]}
    >
      <torusBufferGeometry args={[20, 4, 2, 50]} />
      <meshBasicMaterial attach="material" {...ringTexture}  />
    </mesh>
  );
}

export default SaturnRing;
