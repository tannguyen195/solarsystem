import React, { lazy } from "react";

const Galaxy = lazy(() => import("./Galaxy"));
const SolarSystem = lazy(() => import("./SolarSystem"));
const Particle = lazy(() => import("./Particle/Particle"));

function Scene() {
  return (
    <>
     
      <Galaxy />
      <SolarSystem />
      
      <Particle
        position={[0, -400, 0]}
        scale={new Array(3).fill(300)}
        count={2000}
      />
    </>
  );
}

export default Scene;