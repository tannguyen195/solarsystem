import { useThree } from "@react-three/fiber";

const Lights = () => {
  
  return (
    <>
      <ambientLight intensity={.7} />
      {/* <pointLight castShadow position={[0, 0, 0]} />
      <pointLight castShadow position={[0, -3, 0]} />
      <pointLight castShadow position={[6, 3, 0]} /> */}
      <pointLight
        castShadow
        shadow-bias={0.01}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {/* 
    
      <directionalLight position={[3, 3, 3]} intensity={1.5} /> */}
      {/* 
      
      */}
    </>
  );
};

export default Lights;
