import { planets, earthData, moonData } from "../utilities/planetData";
import Earth from "./Earth";
import Planet from "./Planet";
import SaturnRing from "./SaturnRing";
import Moon from "./Moon";
import Sun from "./Sun";
function SolarSystem() {
  const planetGeometry = <sphereBufferGeometry args={[1, 40, 40]} />;
  // const moon = (
  //   <Planet key={moonData.name} planetGeometry={planetGeometry} {...moonData} />
  // );
  return (
    <group>
      <Sun />
      <Earth
        key={earthData.name}
        {...earthData}
        planetGeometry={planetGeometry}
      />
      <Moon key={moonData.name} planetGeometry={planetGeometry} {...moonData} />
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
