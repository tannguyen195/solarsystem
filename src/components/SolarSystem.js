import { planets, earthData, moonData } from "../utilities/planetData";
import Earth from "./Earth";
import Planet from "./Planet";
import Moon from "./Moon";
import Sun from "./Sun/Sun";

import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { browser } from "../utilities/helper";
import NormalSun from "./NormalSun";
function SolarSystem() {
  const planetGeometry = useMemo(
    () => <sphereBufferGeometry args={[1, 40, 40]} />,
    []
  );

  const browserName = browser.name;
  useFrame(({ camera }) => {});
  return (
    <>
      {browserName === "safari" ? (
        <NormalSun planetGeometry={planetGeometry} />
      ) : (
        <Sun />
      )}

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
