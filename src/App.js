import "./App.css";
import React, { Suspense, lazy, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Stats } from "@react-three/drei";

import CameraControl from "./components/CameraControl";
import Lights from "./components/Lights";
import TrackballControl from "./components/TrackballControl";
import Fallback from "./components/Fallback/Fallback";
import DestinationPanel from "./components/DestinationPanel/DestinationPanel";
import useStore from "./store/useStore";
import { useEffect } from "react/cjs/react.development";
import PlanetDetail from "./components/PlanetDetail/PlanetDetail";

const Scene = lazy(() => import("./components/Scene"));

function App() {
  const cameraPosition = useStore((state) => state.cameraPos);

  //Loading on first initalization
  const [isLoading, onLoading] = useState(true);

  function CustomLoader() {
    const { progress } = useProgress();

    useEffect(() => {
      //Update when loading finish
      if (progress === 100) onLoading(false);
    }, [progress]);

    return <Fallback progress={progress} />;
  }

  return (
    <>
      <div className="bg" />
     
    </>
  );
}

export default App;
