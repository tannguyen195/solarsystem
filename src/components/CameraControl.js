import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import useStore from "../store/useStore";
import useDeviceDetector from "../hooks/deviceDetector";
function CameraControl({ isLoading }) {
  const { scene } = useThree();
  const device = useDeviceDetector();
  const activePlanet = useStore((state) => state.activePlanet);

  const [activeCameraPlanet, setActiveCameraPlanet] = useState(null);

  const [shouldUpdateCameraPosition, setUpdateCameraPosition] = useState(false);

  //Moving camera when first launch
  const [initialMoving, setInitialMoving] = useState(true);

  useEffect(() => {
    setActiveCameraPlanet(activePlanet);
    setUpdateCameraPosition(true);
  }, [activePlanet]);

  useFrame(({ camera }) => {
    //Update the camera when initialization
    if (isLoading === false) {
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

    //Update the camera target when new planet clicked
    if (activePlanet?.name !== activeCameraPlanet?.name) {
      setActiveCameraPlanet(activePlanet);
    }

    //Drive the camera to the view's position
    if (shouldUpdateCameraPosition && activeCameraPlanet) {
      const currentPlanet = scene?.getObjectByName(activeCameraPlanet.name);
      const currentPlanetRadius = activePlanet.size;

      const currentPlanetPosition = currentPlanet.position;

      const zDistance =
        device !== "Mobile" ? 3 * currentPlanetRadius : 5 * currentPlanetRadius;

      camera.position.lerp(
        {
          ...currentPlanetPosition,
          z: currentPlanetPosition.z + zDistance,
        },
        0.05
      );

      const diff = camera.position.clone().sub(currentPlanetPosition).length();

      if (diff < zDistance) {
        setUpdateCameraPosition(false);
      }
    }

    //Update trackball target
    if (activeCameraPlanet) {
      const currentPlanetPosition = scene?.getObjectByName(
        activeCameraPlanet.name
      )?.position;

      scene.trackball?.target.lerp(currentPlanetPosition, 0.05);
      scene.trackball?.update();
    }
  });

  return null;
}

export default CameraControl;
