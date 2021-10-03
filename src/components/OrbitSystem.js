import { planets } from "../utilities/planetData";
import OrbitRing from "./OrbitRing";

function OrbitSystem() {
  return planets.map((planet) => {
    return <OrbitRing key={planet.orbitData.name} {...planet.orbitData} />;
  });
}

export default OrbitSystem;
