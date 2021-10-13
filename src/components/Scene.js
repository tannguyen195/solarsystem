import React, { lazy } from "react";

// import TextGenerator from "./TextGenerator/TextGenerator";

const Galaxy = lazy(() => import("./Galaxy"));
const SolarSystem = lazy(() => import("./SolarSystem"));
//const Star = lazy(() => import("./Star/Star"));

function Scene() {
  return (
    <>
      <Galaxy />
      <SolarSystem />

      {/* <Star
        position={[0, -400, 0]}
        scale={new Array(3).fill(300)}
        count={2000}
      /> */}
    </>
  );
}

export default Scene;
