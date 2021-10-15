import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import useStore from "../../store/useStore";

function InitialControl() {
  const isRendered = useStore((state) => state.isRendered);

  //Moving camera when first launch
  const [initialMoving, setInitialMoving] = useState(true);

  useFrame(({ camera, scene }) => {
    //Update the camera when initialization
    if (isRendered === true) {
      if (initialMoving) {
        const position = {
          x: 66.68508708051569,
          y: 62.688036623625365,
          z: 64.63972187177964,
        };
        camera.position.lerp(position, 0.1);
        const diff = camera.position.clone().sub(position).length();
        if (diff < 0.1) setInitialMoving(false);
      }
    }
  });

  return null;
}

export default InitialControl;
