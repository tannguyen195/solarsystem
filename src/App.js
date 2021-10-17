import "./App.css";
import React, { Suspense, lazy, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Stats } from "@react-three/drei";

import CameraControl from "./components/CameraControl/index";
import Lights from "./components/Lights";
import TrackballControl from "./components/TrackballControl";
import Fallback from "./components/Fallback/Fallback";
import ControlPanel from "./components/ControlPanel";
import useStore from "./store/useStore";
import PlanetDetail from "./components/PlanetDetail/PlanetDetail";
import useDeviceDetector from "./hooks/deviceDetector";

//import Effect from "./components/Effect";

const Scene = lazy(() => import("./components/Scene"));

function App() {
  const device = useDeviceDetector();

  const cameraPosition = useStore((state) => state.cameraPos);
  const setIsRendered = useStore((state) => state.setIsRendered);


  function Loader() {
    const { progress } = useProgress();
    useEffect(() => {
      //Update when loading finish

      if (progress === 100) {
        setIsRendered(true);
      }
    }, [progress]);

    return <Fallback progress={progress} />;
  }

  return (
    <>
      {device !== "Mobile" && <PlanetDetail />}
      <ControlPanel />
      <Loader />
      
        <Canvas
          id="canvas"
          invalidateFrameloop
          dpr={[1, 2]}
          colorManagement
          style={{ background: "#000" }}
          camera={{
            position: cameraPosition,
            near: 0.001,
            far: 900000,
            layers: 0,
          }}
        >
          {process.env.NODE_ENV === "development" && <Stats />}

          <Lights />
          {/* <Effect /> */}
          <CameraControl />
          <TrackballControl />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
    
    </>
  );
}

export default App;
