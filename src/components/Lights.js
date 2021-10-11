import { softShadows } from "@react-three/drei";
softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11, // Rings (default: 11) must be a int
});
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight
        
        color="rgb(255, 220, 180)"
        intensity={1.5}
     
      />
    </>
  );
}

export default Lights;
