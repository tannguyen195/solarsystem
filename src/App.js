import "./App.css";
import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";

import CameraControl from "./components/CameraControl";
import Lights from "./components/Lights";
import TrackballControl from "./components/TrackballControl";
import Fallback from "./components/Fallback/Fallback";
import DestinationPanel from "./components/DestinationPanel/DestinationPanel";
import useStore from "./store/useStore";

const Scene = lazy(() => import("./components/Scene"));
//import Scene from "./components/Scene";
// import Effect from "./components/Effect";

function App() {
  const cameraPosition = useStore((state) => state.cameraPos);

  function CustomLoader() {
    const { progress } = useProgress();
    return <Fallback progress={progress} />;
  }

  return (
    <>
      <DestinationPanel />
      <CustomLoader />

      <Canvas
        colorManagement
        style={{ background: "#232323" }}
        camera={{ position: cameraPosition, near: 0.001, far: 100000 }}
      >
        <Lights />
        <CameraControl />
        {/* <Effect /> */}
        <TrackballControl />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
