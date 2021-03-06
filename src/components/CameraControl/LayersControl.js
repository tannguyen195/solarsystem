import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";

import useStore from "../../store/useStore";
import * as layers from "../../utilities/constants";
function LayersControl() {
  const toggleGalaxy = useStore((state) => state.toggleGalaxy);
  const setToggleGalaxy = useStore((state) => state.setToggleGalaxy);
  const activePlanet = useStore((state) => state.activePlanet);
  const setActivePlanet = useStore((state) => state.setActivePlanet);
  //Moving camera when first launch
  const [move, setMoving] = useState(true);
  const { camera } = useThree();

  useEffect(() => {
    if (toggleGalaxy) {
      camera.layers.disableAll();
      camera.layers.enable(layers.BACKGROUND_LAYER);
      camera.layers.enable(layers.GALAXY_LAYER);
      setMoving(true);
      setActivePlanet(null);
    } else {
      camera.layers.enableAll();
      camera.layers.disable(layers.GALAXY_LAYER);

      setMoving(true);
    }
  }, [camera.layers, setActivePlanet, toggleGalaxy]);

  useEffect(() => {
    if (activePlanet) {
      setToggleGalaxy(false);
    }
  }, [activePlanet, setToggleGalaxy]);

  useFrame(({ camera, scene }) => {
    //Update the camera when toggle galaxy view
    if (toggleGalaxy === true) {
      const position = { x: 0, y: 0, z: 0 };
      scene.trackball?.target.lerp(position, 0.05);
      scene.trackball?.update();
      if (move) {
        camera.position.lerp({ x: 0, y: 3, z: 5 }, 0.1);
        const diff = camera.position.clone().sub(position).length();
        if (diff < 6) setMoving(false);
      }
    }
  });

  return null;
}

export default LayersControl;
