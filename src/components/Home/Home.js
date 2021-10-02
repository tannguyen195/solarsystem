import "./Home.css";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader, useTexture } from "@react-three/drei";

import CameraControl from "../CameraControl";
import Lights from "../Lights";

import Fireflies from "../Fireflies/Fireflies";
import Orbit from "../Orbit";
import { DoubleSide } from "three";

// import Sun from "../Sun/Sun";
const sunRadius = 109;
const planets = [
  {
    name: "earth",
    texture: "/texture_earth_clouds.jpg",
    orbitRate: 365.2565,
    rotationRate: -0.015,
    distance: 15 + sunRadius,
    size: 1,
    axialTilt: [23.4 * (Math.PI / 180), 0, 0],
  },
  {
    name: "moon",
    texture: "/texture_moon.jpeg",
    orbitRate: 29.5,
    rotationRate: -0.01,
    distance: 1.8,
    size: 1 / 3.667,
    axialTilt: [6.68 * (Math.PI / 180), 0, 0],
  },
  {
    name: "mercury",
    texture: "/texture_mercury.jpeg",
    orbitRate: 87.969,
    rotationRate: -0.0061,
    distance: 5.7 + sunRadius,
    size: 1 / 2.6114,
    axialTilt: [0.01 * (Math.PI / 180), 0, 0],
  },
  {
    name: "venus",
    texture: "/texture_venus.jpeg",
    orbitRate: 225,
    rotationRate: 0.00006172839,
    distance: 10.8 + sunRadius,
    size: 1 / 1.05292553191,
    axialTilt: [2.64 * (Math.PI / 180), 0, 0],
  },
  {
    name: "mars",
    texture: "/texture_mars.jpeg",
    orbitRate: 687,
    rotationRate: -0.015,
    distance: 22.7 + sunRadius,
    size: 0.53,
    axialTilt: [25.19 * (Math.PI / 180), 0, 0],
  },
  {
    name: "jupiter",
    texture: "/texture_jupiter.jpeg",
    orbitRate: 4333,
    rotationRate: -0.036,
    distance: 88.8 + sunRadius,
    size: 10.97,
    axialTilt: [3.12 * (Math.PI / 180), 0, 0],
  },
  {
    name: "saturn",
    texture: "/texture_saturn.jpeg",
    orbitRate: 10759,
    rotationRate: -0.03529,
    distance: 143.4 + sunRadius,
    size: 9.14,
    axialTilt: [26.73 * (Math.PI / 180), 0, 0],
  },
  {
    name: "uranus",
    texture: "/texture_uranus.jpeg",
    orbitRate: 30660,
    rotationRate: -0.0211,
    distance: 287.3 + sunRadius,
    size: 3.98,
    axialTilt: [82.23 * (Math.PI / 180), 0, 0],
  },
  {
    name: "neptune",
    texture: "/texture_uranus.jpeg",
    orbitRate: 60266,
    rotationRate: -0.0225,
    distance: 450.1 + sunRadius,
    size: 3.86,
    axialTilt: [28.33 * (Math.PI / 180), 0, 0],
  },
];
const orbitWidth = 0.1;
const orbits = [
  {
    size: planets[0].distance + orbitWidth,
    innerDiameter: planets[0].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "earthOrbit",
    distance: 0,
  },
  {
    size: planets[1].distance + orbitWidth,
    innerDiameter: planets[1].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "moonOrbit",
    distance: 0,
  },
  {
    size: planets[2].distance + orbitWidth,
    innerDiameter: planets[2].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "mercuryOrbit",
    distance: 0,
  },
  {
    size: planets[3].distance + orbitWidth,
    innerDiameter: planets[3].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "venusOrbit",
    distance: 0,
  },
  {
    size: planets[4].distance + orbitWidth,
    innerDiameter: planets[4].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "marsOrbit",
    distance: 0,
  },
  {
    size: planets[5].distance + orbitWidth,
    innerDiameter: planets[5].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "jupiterOrbit",
    distance: 0,
  },
  {
    size: planets[6].distance + orbitWidth,
    innerDiameter: planets[6].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "saturnOrbit",
    distance: 0,
  },
  {
    size: planets[7].distance + orbitWidth,
    innerDiameter: planets[7].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "uranusOrbit",
    distance: 0,
  },
  {
    size: planets[8].distance + orbitWidth,
    innerDiameter: planets[8].distance - orbitWidth,
    facets: 320,
    color: 0xffffff,
    name: "neptuneOrbit",
    distance: 0,
  },
];

function SolarSystem() {
  return planets.map((planet) => {
    return <Planet key={planet.name} {...planet} />;
  });
}

function OrbitSystem() {
  return orbits.map((orbit) => {
    return <Ring key={orbit.name} {...orbit} />;
  });
}

function Sun() {
  const texture = useTexture({
    map: process.env.PUBLIC_URL + "/texture_sun.jpeg",
  });
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[sunRadius, 48, 48]} />
      <meshPhongMaterial attach="material" {...texture} />
    </mesh>
  );
}

function Planet({
  name,
  rotationRate,
  orbitRate,
  size,
  texture,
  distance,
  axialTilt,
}) {
  const planetTexture = useTexture({
    map: process.env.PUBLIC_URL + texture,
  });
  const ref = useRef();
  useFrame(({ scene }) => {
    let time = Date.now();
    ref.current.rotation.y += rotationRate;

    ref.current.position.x =
      Math.sin(time * (1 / (orbitRate * 200)) + 10.0) * distance;
    ref.current.position.z =
      Math.cos(time * (1 / (orbitRate * 200)) + 10.0) * distance;
    if (name === "moon") {
      const earthPosition = scene.getObjectByName("earth")?.position;
      ref.current.position.x = ref.current.position.x + earthPosition.x;
      ref.current.position.z = ref.current.position.z + earthPosition.z;
    }
  });

  return (
    <mesh
      rotation={axialTilt}
      name={name}
      position={[distance, 0, 0]}
      ref={ref}
    >
      <sphereBufferGeometry args={[size, 48, 48]} />
      <meshStandardMaterial attach="material" {...planetTexture} />
    </mesh>
  );
}

function Ring({ size, innerDiameter, facets, color, name, distance }) {
  return (
    <mesh
      name={name}
      rotation={[Math.PI / 2, 0, 0]}
      position={[distance, 0, 0]}
    >
      <ringBufferGeometry args={[size, innerDiameter, facets]} />
      <meshStandardMaterial attach="material" side={DoubleSide} color={color} />
    </mesh>
  );
}

function SaturnRing() {
  const ref = useRef();

  const ringTexture = useTexture({
    map: process.env.PUBLIC_URL + "/texture_jupiter.jpeg",
  });

  useFrame(({ scene }) => {
    const saturnPosition = scene.getObjectByName("saturn")?.position;
    ref.current.position.x = saturnPosition.x;
    ref.current.position.z = saturnPosition.z;
  });

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      name={'saturnRing'}
      rotation={[-26.73 * (Math.PI / 2), 0, 0]}
    >
      <torusBufferGeometry args={[20, 4, 2, 50]} />
      <meshBasicMaterial attach="material" {...ringTexture} side={DoubleSide} />
    </mesh>
  );
}
const Home = () => {
  return (
    <>
      <Canvas
        colorManagement
        style={{ background: "#232323" }}
        camera={{ position: [30, -30, 30], near: 0.001, far: 100000 }}
      >
        <Lights />
        <CameraControl />
        <axesHelper />
        <Orbit />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <SolarSystem />
          <OrbitSystem />
          <SaturnRing/>
          <Sun />
        </Suspense>
        <Fireflies
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
