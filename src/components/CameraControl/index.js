import InitialControl from "./InitialControl";
import LayersControl from "./LayersControl";
import PlanetControl from "./PlanetControl";

function CameraControl() {
  return (
    <>
      <PlanetControl />
      <InitialControl />
      <LayersControl />
    </>
  );
}
export default CameraControl;
