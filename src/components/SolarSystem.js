import { planets, earthData } from "../utilities/planetData";
import Earth from "./Earth";
import Planet from "./Planet";
import SaturnRing from "./SaturnRing";
function SolarSystem() {
  return (
    <group>
      <Earth key={earthData.name} {...earthData} />;
      {planets.map((planet) => {
        return <Planet key={planet.name} {...planet} />;
      })}
      <SaturnRing />
    </group>
  );
}

export default SolarSystem;
