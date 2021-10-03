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

const Sun = lazy(() => import("./components/Sun"));
const SolarSystem = lazy(() => import("./components/SolarSystem"));
const OrbitSystem = lazy(() => import("./components/OrbitSystem"));
const SaturnRing = lazy(() => import("./components/SaturnRing"));
const Particle = lazy(() => import("./components/Particle/Particle"));

function App() {
  const cameraPosition = useStore((state) => state.cameraPos);
  return (
    <>
      <DestinationPanel />
      <Canvas
        colorManagement
        style={{ background: "#232323" }}
        camera={{ position: cameraPosition, near: 0.001, far: 100000 }}
      >
        <Lights />
        <CameraControl />

        <TrackballControl />
        <Html></Html>
        <Suspense
          fallback={
            <Html fullscreen>
              <Fallback />
            </Html>
          }
        >
          <SolarSystem />
          <OrbitSystem />
          <SaturnRing />
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
