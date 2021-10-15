import React, { lazy } from "react";

// import TextGenerator from "./TextGenerator/TextGenerator";
const GalaxyGenerate = lazy(() => import("./GalaxyGenerate/GalaxyGenerate"));
const Galaxy = lazy(() => import("./Galaxy"));
const SolarSystem = lazy(() => import("./SolarSystem"));
//const Star = lazy(() => import("./Star/Star"));

function Scene() {
  // useFrame(({ camera }) => {
  //   camera.layers.enable(10); // camera now sees default layers 0 and layers 1
  // });

  return (
    <>
      <Galaxy />
      <SolarSystem />
      <GalaxyGenerate />
    </>
  );
}

export default Scene;
