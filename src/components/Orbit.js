import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "@react-three/fiber";
extend({ OrbitControls });
const Orbit = () => {
  const controls = useRef();
  const { camera, gl, scene } = useThree();
 
  useFrame(({ orbitControls }) => {});
  useEffect(()=> {
    
  }, [scene.orbitControls?.position0])
  return (
    <orbitControls
      ref={controls}
      attach="orbitControls"
      args={[camera, gl.domElement]}
    />
  );
};

export default Orbit;
