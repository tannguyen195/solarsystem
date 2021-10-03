import earthTexture from "../assets/textures/texture_earth_clouds.jpg";
import moonTexture from "../assets/textures/texture_moon.jpeg";
import venusTexture from "../assets/textures/texture_venus.jpeg";
import mercuryTexture from "../assets/textures/texture_mercury.jpeg";
import jupiterTexture from "../assets/textures/texture_jupiter.jpeg";
import saturnTexture from "../assets/textures/texture_saturn.jpeg";
import uranusTexture from "../assets/textures/texture_uranus.jpeg";
import neptuneTexture from "../assets/textures/texture_neptune.jpeg";
import marsTexture from "../assets/textures/texture_mars.jpeg";

import earthThumbnail from "../assets/images/earth.png";
import moonThumbnail from "../assets/images/moon.png";
import venusThumbnail from "../assets/images/venus.png";
import mercuryThumbnail from "../assets/images/mercury.png";
import jupiterThumbnail from "../assets/images/jupiter.png";
import saturnThumbnail from "../assets/images/saturn.png";
import uranusThumbnail from "../assets/images/uranus.png";
import neptuneThumbnail from "../assets/images/neptune.png";
import marsThumbnail from "../assets/images/mars.png";

export const sunRadius = 25;
export const orbitWidth = 0.01;

export const planets = [
  {
    name: "earth",
    texture: earthTexture,
    orbitRate: 365.2565,
    rotationRate: -0.015,
    distance: 15 + sunRadius,
    size: 1,
    axialTilt: [23.4 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 15 + sunRadius + orbitWidth,
      innerDiameter: 15 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "earthOrbit",
      distance: 0,
    },
    thumbnail: earthThumbnail,
  },
  {
    name: "moon",
    texture: moonTexture,
    orbitRate: 29.5,
    rotationRate: -0.01,
    distance: 1.8,
    size: .27,
    axialTilt: [6.68 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 1.8 + orbitWidth,
      innerDiameter: 1.8 - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "moonOrbit",
      distance: 0,
    },
    thumbnail: moonThumbnail,
  },
  {
    name: "mercury",
    texture: mercuryTexture,
    orbitRate: 87.969,
    rotationRate: -0.0061,
    distance: 5.7 + sunRadius,
    size: 1 / 2.6114,
    axialTilt: [0.01 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 5.7 + sunRadius + orbitWidth,
      innerDiameter: 5.7 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "mercuryOrbit",
      distance: 0,
    },
    thumbnail: mercuryThumbnail,
  },
  {
    name: "venus",
    texture: venusTexture,
    orbitRate: 225,
    rotationRate: 0.00006172839,
    distance: 10.8 + sunRadius,
    size: 1 / 1.05292553191,
    axialTilt: [2.64 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 10.8 + sunRadius + orbitWidth,
      innerDiameter: 10.8 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "venusOrbit",
      distance: 0,
    },
    thumbnail: venusThumbnail,
  },
  {
    name: "mars",
    texture: marsTexture,
    orbitRate: 687,
    rotationRate: -0.015,
    distance: 22.7 + sunRadius,
    size: 0.53,
    axialTilt: [25.19 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 22.7 + sunRadius + orbitWidth,
      innerDiameter: 22.7 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "marsOrbit",
      distance: 0,
    },
    thumbnail: marsThumbnail,
  },
  {
    name: "jupiter",
    texture: jupiterTexture,
    orbitRate: 4333,
    rotationRate: -0.036,
    distance: 88.8 + sunRadius,
    size: 10.97,
    axialTilt: [3.12 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 88.8 + sunRadius + orbitWidth,
      innerDiameter: 88.8 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "jupiterOrbit",
      distance: 0,
    },
    thumbnail: jupiterThumbnail,
  },
  {
    name: "saturn",
    texture: saturnTexture,
    orbitRate: 10759,
    rotationRate: -0.03529,
    distance: 143.4 + sunRadius,
    size: 9.14,
    axialTilt: [26.73 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 143.4 + sunRadius + orbitWidth,
      innerDiameter: 143.4 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "saturnOrbit",
      distance: 0,
    },
    thumbnail: saturnThumbnail,
  },
  {
    name: "uranus",
    texture: uranusTexture,
    orbitRate: 30660,
    rotationRate: -0.0211,
    distance: 287.3 + sunRadius,
    size: 3.98,
    axialTilt: [82.23 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 287.3 + sunRadius + orbitWidth,
      innerDiameter: 287.3 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "uranusOrbit",
      distance: 0,
    },
    thumbnail: uranusThumbnail,
  },
  {
    name: "neptune",
    texture: neptuneTexture,
    orbitRate: 60266,
    rotationRate: -0.0225,
    distance: 450.1 + sunRadius,
    size: 3.86,
    axialTilt: [28.33 * (Math.PI / 180), 0, 0],
    orbitData: {
      size: 450.1 + sunRadius + orbitWidth,
      innerDiameter: 450.1 + sunRadius - orbitWidth,
      facets: 320,
      color: 0xffffff,
      name: "neptuneOrbit",
      distance: 0,
    },
    thumbnail: neptuneThumbnail,
  },
];
