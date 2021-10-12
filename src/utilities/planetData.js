import earthTexture from "../assets/textures/texture_earth.jpg";
import moonTexture from "../assets/textures/texture_moon.jpeg";
import venusTexture from "../assets/textures/texture_venus.jpeg";
import mercuryTexture from "../assets/textures/texture_mercury.jpeg";
import jupiterTexture from "../assets/textures/texture_jupiter.jpeg";
import saturnTexture from "../assets/textures/texture_saturn.jpeg";
import uranusTexture from "../assets/textures/texture_uranus.jpeg";
import neptuneTexture from "../assets/textures/texture_neptune.jpeg";
import marsTexture from "../assets/textures/texture_mars.jpeg";

import earthBumpmap from "../assets/textures/bumpmap_earth.jpg";
import earthNormal from "../assets/textures/normal_earth.png";
import earthSpecular from "../assets/textures/specular_earth.png";
import earthCloud from "../assets/textures/texture_earth_cloud.png";

export const sunRadius = 25;
export const orbitWidth = 0.01;
export const distanceScale = 50;

export const earthData = {
  name: "earth",
  texture: earthTexture,
  orbitRate: 365.2565,
  rotationRate: -0.015,
  distance: 1,
  size: 1,
  axialTilt: [23.4 * (Math.PI / 180), 0, 0],
  distanceScale: 1 * distanceScale + sunRadius,
  moonNumber: 1,
  realRadius: 6371,
  desc: `Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
  orbitData: {
    size: 1 * distanceScale + orbitWidth + sunRadius,
    innerDiameter: 1 * distanceScale - orbitWidth + sunRadius,
    facets: 320,
    color: 0xffffff,
    name: "earthOrbit",
    distance: 0,
  },
  bumpMap: earthBumpmap,
  specularMap: earthSpecular,
  normalMap: earthNormal,
  earthCloud: earthCloud,
};

export const moonData = {
  name: "moon",
  texture: moonTexture,
  orbitRate: 29.5,
  rotationRate: -0.01,
  distance: 0.000025,
  size: 0.27,
  axialTilt: [6.68 * (Math.PI / 180), 0, 0],
  distanceScale: 0.000025 * distanceScale + sunRadius, //0.00246 ,
  distanceToEarth: 384400,
  moonNumber: null,
  realRadius: 1727,
  desc: `Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.`,
  orbitData: {
    size: 0.00246 * distanceScale + orbitWidth + sunRadius,
    innerDiameter: 0.00246 * distanceScale - orbitWidth + sunRadius,
    facets: 320,
    color: 0xffffff,
    name: "moonOrbit",
    distance: 0,
  },
};

export const planets = [
  {
    name: "mercury",
    texture: mercuryTexture,
    orbitRate: 87.969,
    rotationRate: -0.0061,
    distance: 0.4,
    size: 1 / 2.6114,
    axialTilt: [0.01 * (Math.PI / 180), 0, 0],

    distanceScale: 0.4 * distanceScale + sunRadius,
    moonNumber: 0,
    realRadius: 2440,
    desc: `Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`,
    orbitData: {
      size: 0.4 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 0.4 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "mercuryOrbit",
      distance: 0,
    },
  },
  {
    name: "venus",
    texture: venusTexture,
    orbitRate: 225,
    rotationRate: 0.00006172839,
    distance: 0.7,
    size: 1 / 1.05292553191,
    axialTilt: [2.64 * (Math.PI / 180), 0, 0],
    distanceScale: 0.7 * distanceScale + sunRadius,
    moonNumber: 0,
    realRadius: 6052,
    desc: `Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`,
    orbitData: {
      size: 0.7 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 0.7 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "venusOrbit",
      distance: 0,
    },
  },
  {
    name: "mars",
    texture: marsTexture,
    orbitRate: 687,
    rotationRate: -0.015,
    distance: 1.5,
    size: 0.53,
    axialTilt: [25.19 * (Math.PI / 180), 0, 0],
    distanceScale: 1.5 * distanceScale + sunRadius,
    moonNumber: 2,
    realRadius: 3390,
    desc: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.`,
    orbitData: {
      size: 1.5 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 1.5 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "marsOrbit",
      distance: 0,
    },
  },
  {
    name: "jupiter",
    texture: jupiterTexture,
    orbitRate: 4333,
    rotationRate: -0.036,
    distance: 88.8 + sunRadius,
    size: 10.97,
    axialTilt: [3.12 * (Math.PI / 180), 0, 0],
    distanceScale: 5.2 * distanceScale + sunRadius,
    moonNumber: 79,
    realRadius: 69911,
    desc: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`,
    orbitData: {
      size: 5.2 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 5.2 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "jupiterOrbit",
      distance: 0,
    },
  },
  {
    name: "saturn",
    texture: saturnTexture,
    orbitRate: 10759,
    rotationRate: -0.03529,
    distance: 9.5,
    size: 9.14,
    axialTilt: [26.73 * (Math.PI / 180), 0, 0],
    distanceScale: 9.5 * distanceScale + sunRadius,
    moonNumber: 62,
    realRadius: 58232,
    desc: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`,
    orbitData: {
      size: 9.5 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 9.5 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "saturnOrbit",
      distance: 0,
    },
  },
  {
    name: "uranus",
    texture: uranusTexture,
    orbitRate: 30660,
    rotationRate: -0.0211,
    distance: 19.8,
    size: 3.98,
    axialTilt: [82.23 * (Math.PI / 180), 0, 0],
    distanceScale: 19.8 * distanceScale + sunRadius,
    moonNumber: 27,
    realRadius: 25362,
    desc: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
    orbitData: {
      size: 19.8 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 19.8 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "uranusOrbit",
      distance: 0,
    },
  },
  {
    name: "neptune",
    texture: neptuneTexture,
    orbitRate: 60266,
    rotationRate: -0.0225,
    distance: 30.1,
    size: 3.86,
    axialTilt: [28.33 * (Math.PI / 180), 0, 0],
    distanceScale: 30.1 * distanceScale + sunRadius,
    moonNumber: 14,
    realRadius: 24622,
    desc: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.`,
    orbitData: {
      size: 30.1 * distanceScale + orbitWidth + sunRadius,
      innerDiameter: 30.1 * distanceScale - orbitWidth + sunRadius,
      facets: 320,
      color: 0xffffff,
      name: "neptuneOrbit",
      distance: 0,
    },
  },
];
