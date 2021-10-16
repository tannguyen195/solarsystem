import { useMemo } from "react";
import { Line } from "@react-three/drei";
import { generatePointCircle } from "../utilities/helper";
function OrbitRing({ radius, layers = 0 }) {
  const [vertices] = useMemo(() => {
    const vertices = generatePointCircle(radius);
    return [vertices];
  }, [radius]);

  return (
    <Line layers={layers} points={vertices} color="white" lineWidth={0.1} />
  );
}

export default OrbitRing;
