import "./App.css";
import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import DestinationPanel from "./components/DestinationPanel/DestinationPanel";

import CameraControl from "./components/CameraControl";
import Lights from "./components/Lights";
import TrackballControl from "./components/TrackballControl";
import Fallback from "./components/Fallback/Fallback";
import useStore from "./store/useStore";
// import Effect from "./components/Effect";

const Galaxy = lazy(() => import("./components/Galaxy"));
const Sun = lazy(() => import("./components/Sun"));
const SolarSystem = lazy(() => import("./components/SolarSystem"));
const Particle = lazy(() => import("./components/Particle/Particle"));

function App() {
  const cameraPosition = useStore((state) => state.cameraPos);
  return (
    <>
      <DestinationPanel />
      <Canvas
        shadows
        colorManagement
        style={{ background: "#232323" }}
        camera={{ position: cameraPosition, near: 0.001, far: 100000 }}
      >
        <Lights />
        <CameraControl />
        {/* <Effect /> */}
        <TrackballControl />
        <Html></Html>
        <Suspense
          fallback={
            <Html fullscreen>
              <Fallback />
            </Html>
          }
        >
          <Galaxy />
          <SolarSystem />

          <Sun />
          <Particle
            position={[0, -400, 0]}
            scale={new Array(3).fill(300)}
            count={2000}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
