import earthThumbnail from "../../assets/images/earth.png";
import moonThumbnail from "../../assets/images/moon.png";
import venusThumbnail from "../../assets/images/venus.png";
import mercuryThumbnail from "../../assets/images/mercury.png";
import jupiterThumbnail from "../../assets/images/jupiter.png";
import saturnThumbnail from "../../assets/images/saturn.png";
import uranusThumbnail from "../../assets/images/uranus.png";
import neptuneThumbnail from "../../assets/images/neptune.png";
import marsThumbnail from "../../assets/images/mars.png";

export const planets = [
  {
    id: 1,
    name: "earth",
    size: 1,
    thumbnail: earthThumbnail,
  },
  {
    name: "moon",
    size: 0.27,
    thumbnail: moonThumbnail,
    id: 2,
  },
  {
    name: "mercury",
    size: 1 / 2.6114,
    thumbnail: mercuryThumbnail,
    id: 3,
  },
  {
    name: "venus",
    size: 1 / 1.05292553191,
    thumbnail: venusThumbnail,
    id: 4,
  },
  {
    name: "mars",
    size: 0.53,
    thumbnail: marsThumbnail,
    id: 5,
  },
  {
    name: "jupiter",
    size: 10.97,
    thumbnail: jupiterThumbnail,
    id: 6,
  },
  {
    name: "saturn",
    size: 9.14,
    thumbnail: saturnThumbnail,
    id: 7,
  },
  {
    name: "uranus",
    size: 3.98,
    thumbnail: uranusThumbnail,
    id: 8,
  },
  {
    name: "neptune",
    size: 3.86,
    thumbnail: neptuneThumbnail,
    id: 9,
  },
];
