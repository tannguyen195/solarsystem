import { planets, earthData, moonData } from "../utilities/planetData";
import Earth from "./Earth";
import Planet from "./Planet";
import SaturnRing from "./SaturnRing";

function SolarSystem() {
  const planetGeometry = <sphereBufferGeometry args={[1, 40, 40]} />;
  // const moon = (
  //   <Planet key={moonData.name} planetGeometry={planetGeometry} {...moonData} />
  // );
  return (
    <group>
      <Earth key={earthData.name} {...earthData} />
    
      <Planet
        key={moonData.name}
        planetGeometry={planetGeometry}
        {...moonData}
      />
      {planets.map((planet) => {
        return (
          <Planet
            key={planet.name}
            planetGeometry={planetGeometry}
            {...planet}
          />
        );
      })}
      <SaturnRing />
    </group>
  );
}

export default SolarSystem;
