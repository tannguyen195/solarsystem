import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { sunData } from "../utilities/planetData";
function NormalSun({ planetGeometry }) {
  const planetMaterial = useTexture({ map: sunData.texture });
  const ref = useRef();

  return (
    <mesh
      layers={sunData.layers}
      scale={sunData.size}
      name={sunData.name}
      position={[0, 0, 0]}
      ref={ref}
    >
      {planetGeometry}
      <meshPhongMaterial
        emissive="#fc9601"
        emissiveIntensity={0.7}
        attach="material"
        {...planetMaterial}
      />
    </mesh>
  );
}

export default NormalSun;
