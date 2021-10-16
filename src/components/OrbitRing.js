import { useMemo } from "react";
import * as THREE from "three";



function OrbitRing({ radius }) {
  const segmentCount = 128;

  const [vertices] = useMemo(() => {
    const vertices = new Float32Array(segmentCount * 3);
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * Math.PI * 2;
      new THREE.Vector3(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius
      ).toArray(vertices, i * 3);
    }

    return [vertices];
  }, [radius]);

  return (
    <line layers={14}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={128}
          array={vertices}
          itemSize={3}
        />
      </bufferGeometry>
    </line>
  );
}

export default OrbitRing;
