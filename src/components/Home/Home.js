import "./Home.css";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader, useTexture } from "@react-three/drei";

import CameraControl from "../CameraControl";
import Lights from "../Lights";
import OrbitControl from "../TrackballControl";


import Particle from "../Particle/Particle";
import Sun from "../Sun";
import SaturnRing from "../SaturnRing";
import OrbitSystem from "../OrbitSystem";
import SolarSystem from "../SolarSystem";
// import Sun from "../Sun/Sun";

const Home = () => {
  return (
    <>
      <Canvas
        colorManagement
        style={{ background: "#232323" }}
        camera={{ position: [30, -30, -3000], near: 0.001, far: 100000 }}
      >
        <Lights />
        <CameraControl />

        <OrbitControl />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <SolarSystem />
          <OrbitSystem />
          <SaturnRing />
          <Sun />
        </Suspense>
        <Particle
          position={[0, -400, 0]}
          scale={new Array(3).fill(300)}
          count={2000}
        />
      </Canvas>
      {/* <ScrollBar domContent={domContent} /> */}
    </>
  );
};

export default Home;

// <SectionContent positionY={250}>
// <mesh position={[677.6, 1157, 894.5]} rotation={[0, -1, 0]}>
//   <Spaceship scale={new Array(3).fill(0.75)} />
// </mesh>

// <Html fullscreen className="html-wrapper">
//   <div className="container section_1">
//     <div className="text1">
//       Learn something new
//       <h1 className="text2">
//         THE UNIVERSE <br />
//       </h1>
//     </div>
//   </div>
// </Html>
// </SectionContent>
// useFrame(() => {
//
//   const position = ref.current.position,
//     angle = 125, //angle in degrees
//     speed = 2.5;

//   const angleRad = angle * (Math.PI / 180); //angle in radians
//   if (position.z < 85) {
//     position.x = position.x + speed * Math.cos(angleRad);
//     position.z = position.z + speed * Math.sin(angleRad);
//   }
// });
