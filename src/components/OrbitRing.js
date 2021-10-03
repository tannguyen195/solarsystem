import { DoubleSide } from "three";

function OrbitRing({ size, innerDiameter, facets, color, name, distance }) {
  return (
    <mesh
      name={name}
      rotation={[Math.PI / 2, 0, 0]}
      position={[distance, 0, 0]}
    >
      <ringBufferGeometry args={[size, innerDiameter, facets]} />
      <meshStandardMaterial attach="material" side={DoubleSide} color={color} />
    </mesh>
  );
}

export default OrbitRing;
