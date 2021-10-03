import { planets } from "../utilities/planetData";
import Planet from "./Planet";

function SolarSystem() {
  return planets.map((planet) => {
    return <Planet key={planet.name} {...planet} />;
  });
}

export default SolarSystem;
