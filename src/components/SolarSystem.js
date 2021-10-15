import { planets, earthData, moonData } from "../utilities/planetData";
import Earth from "./Earth";
import Planet from "./Planet";
import Moon from "./Moon";
import Sun from "./Sun/Sun";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";

function SolarSystem() {
  const planetGeometry = useMemo(
    () => <sphereBufferGeometry args={[1, 40, 40]} />,
    []
  );

  useFrame(({ camera }) => {});
  return (
    <>
      <Sun  />

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
    </>
  );
}

export default SolarSystem;
