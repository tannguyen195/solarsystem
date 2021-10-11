import { useFrame, useThree } from "@react-three/fiber";
import useStore from "../store/useStore";

function CameraControl() {
  const { scene } = useThree();

  const activePlanet = useStore((state) => state.activePlanet);

  const activeCameraPlanet = useStore((state) => state.activeCameraPlanet);
  
  const setActiveCameraPlanet = useStore(
    (state) => state.setActiveCameraPlanet
  );

  const shouldUpdateCameraPosition = useStore(
    (state) => state.shouldUpdateCameraPosition
  );
  const setUpdateCameraPosition = useStore(
    (state) => state.setUpdateCameraPosition
  );

  useFrame(({ camera }) => {
    //Update the camera target when new planet clicked

    if (activePlanet.activePlanetName !== activeCameraPlanet) {
      setActiveCameraPlanet(activePlanet.activePlanetName);
    }

    //Drive the camera to the view's position
    if (shouldUpdateCameraPosition) {
      const currentPlanet = scene?.getObjectByName(
        activePlanet.activePlanetName
      );
      const currentPlanetRadius = activePlanet.activePlanetRadius;
      if (currentPlanet) {
        const currentPlanetPosition = currentPlanet?.position;

        camera.position.lerp(
          {
            ...currentPlanetPosition,
            z: currentPlanetPosition.z + 3 * currentPlanetRadius,
          },
          0.05
        );
        const diff = camera.position
          .clone()
          .sub(currentPlanetPosition)
          .length();
        if (diff < 3 * currentPlanetRadius) setUpdateCameraPosition(false);
      }
    }

    //Update trackball target
    if (activeCameraPlanet) {
      const currentPlanetPosition =
        scene?.getObjectByName(activeCameraPlanet)?.position;
      scene.trackball?.target.lerp(currentPlanetPosition, 0.05);
      scene.trackball?.update();
    }
  });

  return null;
}

export default CameraControl;
