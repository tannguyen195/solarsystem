import { useFrame } from "@react-three/fiber";
import { useState, useEffect } from "react";
import useStore from "../../store/useStore";
import useDeviceDetector from "../../hooks/deviceDetector";

function PlanetControl() {
  const device = useDeviceDetector();
  const activePlanet = useStore((state) => state.activePlanet);

  const [shouldUpdateCameraPosition, setUpdateCameraPosition] = useState(false);

  useEffect(() => {
    setUpdateCameraPosition(true);
  }, [activePlanet]);

  useFrame(({ camera, scene }) => {
    //Drive the camera to the view's position
    if (shouldUpdateCameraPosition && activePlanet) {
      const currentPlanet = scene?.getObjectByName(activePlanet.name);

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
     
      if (diff < zDistance + 0.1 && diff > zDistance - 0.1) {
        setUpdateCameraPosition(false);
      }
    }

    //Update trackball target
    if (activePlanet) {
      const currentPlanetPosition = scene.getObjectByName(
        activePlanet.name
      )?.position;

      scene.trackball?.target.lerp(currentPlanetPosition, 0.05);
      scene.trackball?.update();
    }
  });

  return null;
}

export default PlanetControl;
