import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import useScrollDirection from "../hooks/scrollDirection";
import useStore from "../store/useStore";
import * as THREE from "three";
import { Vector3 } from "three";

function CameraControl() {
  const direction = useScrollDirection();
  const cameraRef = useRef();

  const { scene } = useThree();
  console.log(direction);

  const cameraPos = useStore((state) => state.cameraPos);
  const cameraRos = useStore((state) => state.cameraRos);

  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    setPosition(cameraPos);
    setRotation(cameraRos);
  }, [cameraPos, cameraRos]);

  // useFrame(({ camera }) => {
  //   if (direction === false) {
  //     //camera.position.lerp(new THREE.Vector3(0, 0, 0 - 1), 0.1);

  //     //camera.lookAt(new THREE.Vector3(0, 0, 0));

  //     scene.orbitControls?.update();
  //   }
  // });

  return null;
}

export default CameraControl;
