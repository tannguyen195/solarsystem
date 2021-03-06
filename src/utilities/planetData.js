import sunTexture from "../assets/textures/texture_sun.jpeg";
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

import * as layers from "./constants";
export const sunRadius = 25;
export const orbitWidth = 0.01;
export const distanceScale = 50;
export const galaxyData = {
  name: `The Milky Way`,
  desc: `The Milky Way is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.`,
  data: [
    {
      title: "Radius",
      value: "52,850 light years",
    },
    {
      title: "Age",
      value: "13.51 billion years",
    },
    {
      title: "Number of stars",
      value: "100–400 billion",
    },
  ],
  layers: layers.GALAXY_LAYER,
  size: 1,
};
export const sunData = {
  name: "sun",
  layers: layers.SUN_LAYER,
  size: sunRadius,
  orbitRate: 230,
  texture: sunTexture,
  data: [
    {
      title: "Distance from Earth",
      value: "149.25 million km (1 AU)",
    },
    {
      title: "Gravity",
      value: "274 m/s²",
    },
    {
      title: "Mass",
      value: "1.989 × 10^30 kg",
    },
    {
      title: "Surface Temperature",
      value: "5,778 K",
    },
    {
      title: "Radius",
      value: "696,340 km",
    },
  ],
  distanceToEarth: 1,
  desc: `The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit.`,
};
export const earthData = {
  name: "earth",
  layers: layers.EARTH_LAYER,
  texture: earthTexture,
  orbitRate: 365.2565,
  rotationRate: -0.015,

  size: 1,
  axialTilt: [23.4 * (Math.PI / 180), 0, 0],
  distanceScale: 1 * distanceScale + sunRadius,
  distance: 1,
  data: [
    {
      title: "Radius",
      value: "6.371 km",
    },
    {
      title: "Distance from Sun",
      value: "149.25 million km (1 AU)",
    },
    {
      title: "Mass",
      value: "5.972 × 10^24 kg",
    },
    {
      title: "Moon",
      value: "1",
    },
    {
      title: "Population",
      value: "7.753 billion (2020)",
    },
  ],

  desc: `Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
  bumpMap: earthBumpmap,
  specularMap: earthSpecular,
  normalMap: earthNormal,
  earthCloud: earthCloud,
};

export const moonData = {
  name: "moon",
  layers: layers.MOON_LAYER,
  texture: moonTexture,
  orbitRate: 29.5,
  rotationRate: -0.01,
  size: 0.27,
  axialTilt: [6.68 * (Math.PI / 180), 0, 0],
  distanceScale: 0.000025 * distanceScale + sunRadius, //0.00246 ,
  data: [
    {
      title: "Distance from Earth",
      value: "384,400 km",
    },
    {
      title: "Radius",
      value: "1.727 km",
    },
    {
      title: "Mass",
      value: "7.34767309 × 10^22 kg",
    },
    {
      title: "Gravity",
      value: "1.62 m/s²",
    },
  ],
  distance: 0.000025,

  desc: `Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.`,
};

export const planets = [
  {
    name: "mercury",
    layers: layers.MERCURY_LAYER,
    texture: mercuryTexture,
    orbitRate: 87.969,
    rotationRate: -0.0061,
    size: 1 / 2.6114,
    axialTilt: [0.01 * (Math.PI / 180), 0, 0],
    distanceScale: 0.4 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "47.833 million km (0.4 AU)",
      },
      {
        title: "Radius",
        value: "2.440 km",
      },
      {
        title: "Mass",
        value: "3.285 × 10^23 kg",
      },
      {
        title: "Gravity",
        value: "3.7 m/s²",
      },
      {
        title: "Length of Day",
        value: "58d 15h 30m",
      },
      {
        title: "Length of Year",
        value: "88 days",
      },
      {
        title: "Moon",
        value: "0",
      },
    ],

    distance: 0.4,
    desc: `Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`,
  },
  {
    name: "venus",
    layers: layers.VENUS_LAYER,
    texture: venusTexture,
    orbitRate: 225,
    rotationRate: 0.00006172839,

    size: 1 / 1.05292553191,
    axialTilt: [2.64 * (Math.PI / 180), 0, 0],
    distanceScale: 0.7 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "108.91 million km (0.7 AU)",
      },
      {
        title: "Radius",
        value: "6.052 km",
      },
      {
        title: "Mass",
        value: "4.867 × 10^24 kg",
      },
      {
        title: "Gravity",
        value: "8.87 m/s²",
      },
      {
        title: "Length of Day",
        value: "116d 18h 0m",
      },
      {
        title: "Length of Year",
        value: "225 days",
      },
      {
        title: "Moon",
        value: "0",
      },
    ],
    distance: 0.7,
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
    layers: layers.MARS_LAYER,
    texture: marsTexture,
    orbitRate: 687,
    rotationRate: -0.015,

    size: 0.53,
    axialTilt: [25.19 * (Math.PI / 180), 0, 0],
    distanceScale: 1.5 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "244.49 million km (1.5 AU)",
      },
      {
        title: "Radius",
        value: "3.390 km",
      },
      {
        title: "Mass",
        value: "6.39 × 10^23 kg",
      },
      {
        title: "Gravity",
        value: "3.721 m/s²",
      },
      {
        title: "Length of Day",
        value: "1d 0h 37m",
      },
      {
        title: "Length of Year",
        value: "1.88 years",
      },
      {
        title: "Moon",
        value: "2",
      },
    ],

    distance: 1.5,
    desc: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.`,
  },
  {
    name: "jupiter",
    layers: layers.JUPITER_LAYER,
    texture: jupiterTexture,
    orbitRate: 4333,
    rotationRate: -0.036,

    size: 10.97,
    axialTilt: [3.12 * (Math.PI / 180), 0, 0],
    distanceScale: 5.2 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "750 million km (5.2 AU)",
      },
      {
        title: "Radius",
        value: "69.911 km",
      },
      {
        title: "Mass",
        value: "1.898 × 10^27 kg",
      },
      {
        title: "Gravity",
        value: "24.79 m/s²",
      },
      {
        title: "Length of Day",
        value: "0d 9h 56m",
      },
      {
        title: "Length of Year",
        value: "11.86 years",
      },
      {
        title: "Moon",
        value: "79",
      },
    ],
    distance: 5.2,
    desc: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`,
  },
  {
    name: "saturn",
    layers: layers.SUN_LAYER,
    texture: saturnTexture,
    orbitRate: 10759,
    rotationRate: -0.03529,

    size: 9.14,
    axialTilt: [26.73 * (Math.PI / 180), 0, 0],
    distanceScale: 9.5 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "1.4839 billion km (9.5 AU)",
      },
      {
        title: "Radius",
        value: "58.232 km",
      },
      {
        title: "Mass",
        value: "5.683 × 10^26 kg",
      },
      {
        title: "Gravity",
        value: "10.44 m/s²",
      },
      {
        title: "Length of Day",
        value: "0d 10h 42m",
      },
      {
        title: "Length of Year",
        value: "29.45 years",
      },
      {
        title: "Moon",
        value: "62",
      },
    ],

    distance: 9.5,

    desc: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`,
  },
  {
    name: "uranus",
    layers: layers.URANUS_LAYER,
    texture: uranusTexture,
    orbitRate: 30660,
    rotationRate: -0.0211,

    size: 3.98,
    axialTilt: [82.23 * (Math.PI / 180), 0, 0],
    distanceScale: 19.8 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "2.9515 billion km (19.8 AU)",
      },
      {
        title: "Radius",
        value: "25.362 km",
      },
      {
        title: "Mass",
        value: "8.681 × 10^25 kg",
      },
      {
        title: "Gravity",
        value: "8.87 m/s²",
      },
      {
        title: "Length of Day",
        value: "0d 17h 14m",
      },
      {
        title: "Length of Year",
        value: "84 years",
      },
      {
        title: "Moon",
        value: "27",
      },
    ],

    moonNumber: 27,
    distance: 19.8,
    desc: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
  },
  {
    name: "neptune",
    layers: layers.NEPTUNE_LAYER,
    texture: neptuneTexture,
    orbitRate: 60266,
    rotationRate: -0.0225,

    size: 3.86,
    axialTilt: [28.33 * (Math.PI / 180), 0, 0],
    distanceScale: 30.1 * distanceScale + sunRadius,
    data: [
      {
        title: "Distance from Sun",
        value: "4.475 billion km (30.1 AU)",
      },
      {
        title: "Radius",
        value: "24.622 km",
      },
      {
        title: "Mass",
        value: "1.024 × 10^26 kg",
      },
      {
        title: "Gravity",
        value: "11.15 m/s²",
      },
      {
        title: "Length of Day",
        value: "0d 16h 6m",
      },
      {
        title: "Length of Year",
        value: "164.81 years",
      },
      {
        title: "Moon",
        value: "14",
      },
    ],

    distance: 30.1,
    desc: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.`,
  },
];
